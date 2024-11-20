// pages/index.js
'use client'
import Link from 'next/link';
import React from "react";
import { Button, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";

export default function Schema() {
  const items = [
    {
      id: 1,
      title: "Isolation and Identification of bacterial strains in the forest soils of Bhadrachalam",
      image: "playoff.png", 
    },
    {
      id: 2,
      title: "Isolation and Identification of bacterial strains in the forest soils of Bhadrachalam",
      image: "schema_01.png", 
    },
    {
      id: 3,
      title: "Isolation and Identification of bacterial strains in the forest soils of Bhadrachalam",
      image: "schema_02.png", 
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      {/* Top Section */}
      <Grid container justifyContent="end" alignItems="center" mb={6} paddingRight='15px' paddingTop='10px'>
      <Link href="/createschema">
        <Button sx={{color:'#ffffff',  fontWeight:"700" ,fontSize:'12px' ,background:'#6EA6FF',}}>
          <span> Draw New</span> 
        </Button></Link>
      </Grid>
      <Typography  fontWeight="600" fontSize='14px' paddingBottom='15px' color='#B3ABAB'>
          Latest
        </Typography>

      {/* Card Row */}
      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <Card style={{ border: "1px solid #D9D9D9", borderRadius: "10px" }}>
              <CardMedia
                component="img"
                image={item.image}
                alt={item.title}
                style={{ height: "150px", objectFit: "contain", marginTop: "10px" }}
              />
              <CardContent>
                <Typography variant="body2" fontWeight="600" fontSize='14px'  textAlign="center" color='#B3ABAB'>
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
