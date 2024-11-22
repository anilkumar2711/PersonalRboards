"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setStore } from '@/redux/store';
import { api,apiContext } from '@/libs/axios';
import serviceProvider from './service.provider';
import sidemenuProvider from './sidemenu.provider';

const MixinContext = createContext();

export function MixinProvider({ children }) {
    const methods = serviceProvider.methods;
    const $store = useSelector((state) => state.root);
    const dispatch = useDispatch();
    const setStoreMethod = (name,value)=>{
        let dispatchPayload = null;
        if(typeof name == "string") { 
            dispatchPayload = setStore({name,value}) 
        } else { 
            dispatchPayload = setStore(name);  
        }
        dispatchPayload && dispatch(dispatchPayload);
    };
    apiContext.service = serviceProvider;
    serviceProvider.methods = Object.assign({api,$store,setStore},methods);
    const readables = {
        sidemnu:sidemenuProvider,
        api,
        service:serviceProvider,
        $store,
        setStore:setStoreMethod,
    };
    const setComponent = (name,node={})=>{
        globalThis[name] = {
            ...readables,
            ...node
        };
        return globalThis[name];
    }
    const payload = {
        ...readables,
        setComponent
    };
    useEffect(()=>{
        globalThis.api = api;
        globalThis.service = serviceProvider;
        globalThis.setStore = setStore;
    },[]);
    return (
        <MixinContext.Provider value={payload}>
            {children}
        </MixinContext.Provider>
    );
}

export function useMixin() {
    return useContext(MixinContext);
}
