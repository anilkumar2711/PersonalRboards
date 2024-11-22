
"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/InputWrapper"
import { Form } from "@/components/ui/Form";
import { Box } from '@mui/material';
import { User, Flag, CalendarDays, Clock, CircleFadingArrowUp, Tag, Text } from "lucide-react"
import { useMixin } from "@/providers/mixin.provider";

export default function ProjectForm(props) {
    const { project,submitLabel="SAVE" } = props;
    const { service, $store } = useMixin();
    const { icons } = service;
    const { statusOptions, priorityOptions, labelOptions  } = $store;

    const ColorTag = (props) => <span style={{ backgroundColor: props.option?.color, display: 'block', borderRadius: '4px', width: '16px', height: '16px', marginRight: '10px' }} ></span>;

    const renderColorOption = (props, option) => (
        <li {...props} key={option.value} >
            <span style={{ backgroundColor: option.color, borderRadius: '4px', width: '16px', height: '16px', marginRight: '10px' }} ></span>
            {option.label}
        </li>
    );

    const renderIconOption = (props, option) => (
        <li {...props} key={option.value} >
            <span style={{ backgroundColor: option.color, padding: '4px', display: 'flex', gap: 2, whiteSpace: 'nowrap', borderRadius: '4px' }} >
                <Tag />
                {option.label}
            </span>
        </li>
    );

    const handleSubmit = (data, event) => {
        props.onSubmit && props.onSubmit(data,event);
    };
    return (
        <Box sx={{}}>
            <Form onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: '12px', fontWeight: '600' }}>
                    <User sx={{ width: 16, height: 16, color: 'text.secondary' }} />
                    <span style={{ fontSize: '14px', fontWeight: '600', width: 96 }}>Owner</span>
                    <Input name="owner" value={project.owner?.full_name} />
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: '12px', fontWeight: '600' }}>
                    <Clock />
                    <span style={{ fontSize: '14px', fontWeight: '600', width: 96 }}>Status</span>
                    <Input name="status" type="search" options={statusOptions} renderOption={renderColorOption} value={project.status} icon={ColorTag} />
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: '12px', fontWeight: '600' }}>
                    <CircleFadingArrowUp />
                    <span style={{ fontSize: '14px', fontWeight: '600', width: 96 }}>Completion</span>
                    <Input name="completion" type="progress" value={project.completion} />
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: '12px', fontWeight: '600' }}>
                    <CalendarDays />
                    <span style={{ fontSize: '14px', fontWeight: '600', width: 96 }}>Dates</span>
                    <Input name="dates" type="datestartend" value={project.dates} />
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: '12px', fontWeight: '600' }}>
                    <Flag />
                    <span style={{ fontSize: '14px', fontWeight: '600', width: 96 }}>Priority</span>
                    <Input
                        name="priority"
                        type="search"
                        options={priorityOptions}
                        renderOption={renderColorOption}
                        value={project.priority}
                        icon={ColorTag}
                    />
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: '12px', fontWeight: '600' }}>
                    <Tag />
                    <span style={{ fontSize: '14px', fontWeight: '600', width: 96 }}>Label</span>
                    <Input name="label" value={project.label} type="tags" options={labelOptions} renderOption={renderIconOption} icon={Tag} />
                </Box>

                <Box sx={{ '& > * + *': { marginTop: 8 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: '12px', fontWeight: '600' }}>
                        <span style={{ alignSelf:'start' }}><Text /></span>
                        <span style={{ fontSize: '14px', fontWeight: '600', width: 96, alignSelf:'start' }} >Summary</span>
                        <Input name="summary" type="textarea" value={project.summary} />
                    </Box>
                </Box>
                <input type="hidden" name="name" value={project.name} ></input>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, justifyContent: 'flex-end' }} >
                    <Button type="submit" sx={{ paddingX: 2, color: '#FFF' }} >{submitLabel}</Button>
                </Box>
            </Form>
        </Box>
    )
}