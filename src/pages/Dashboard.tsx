import React from 'react'
import { Link } from 'react-router-dom'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"

const Dashboard = () => {
    return (
        <div className='w-screen h-screen bg-black  gap-4 p-4 overflow-y-auto'>Dashboard
            <Link to='/'>sfreferf</Link>
            <div className='h-[800px] p-4 '>
                <ResizablePanelGroup direction="vertical">
                    <ResizablePanel className='p-1'>
                        <ResizablePanelGroup direction="horizontal">
                            <ResizablePanel className='bg-green-400 p-2'><iframe src="http://localhost:3000/d-solo/CgCw8jKZz/go-metrics?orgId=1&refresh=5s&panelId=22" className='w-full h-full'></iframe></ResizablePanel>
                            <ResizableHandle withHandle />
                            <ResizablePanel className='bg-red-400 p-2'><iframe src="http://localhost:3000/d-solo/CgCw8jKZz/go-metrics?orgId=1&refresh=5s&panelId=28"className='w-full h-full'></iframe></ResizablePanel>
                        </ResizablePanelGroup>
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel className='p-1'>
                        <ResizablePanelGroup direction="horizontal">
                            <ResizablePanel className='bg-red-400 p-2'><iframe src="http://localhost:3000/d-solo/CgCw8jKZz/go-metrics?orgId=1&refresh=5s&panelId=14" className='w-full h-full'></iframe></ResizablePanel>
                            <ResizableHandle withHandle />
                            <ResizablePanel className='bg-orange-400 p-2'><iframe src="http://localhost:3000/d-solo/CgCw8jKZz/go-metrics?orgId=1&refresh=5s&panelId=20" className='w-full h-full'   ></iframe></ResizablePanel>
                        </ResizablePanelGroup>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
            <div className='h-[800px]  p-4'>
                <ResizablePanelGroup direction="vertical">
                    <ResizablePanel className='p-1' >
                        <ResizablePanelGroup direction="horizontal">
                            <ResizablePanel className='bg-green-400 p-2'><iframe src="http://localhost:3000/d-solo/CgCw8jKZz/go-metrics?orgId=1&refresh=5s&panelId=12" className='w-full h-full'></iframe></ResizablePanel>
                            <ResizableHandle withHandle />
                            <ResizablePanel className='bg-red-400 p-2'> <iframe src="http://localhost:3000/d-solo/CgCw8jKZz/go-metrics?orgId=1&refresh=5s&panelId=16"className='w-full h-full' ></iframe></ResizablePanel>
                        </ResizablePanelGroup>
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel className='p-1 '>
                        <ResizablePanelGroup direction="horizontal">
                            <ResizablePanel className='bg-green-300 p-2'><iframe src="http://localhost:3000/d-solo/CgCw8jKZz/go-metrics?orgId=1&refresh=5s&panelId=26" className='w-full h-full' ></iframe></ResizablePanel>
                            <ResizableHandle withHandle />
                            <ResizablePanel className='bg-yellow-300 p-2'><iframe src="http://localhost:3000/d-solo/CgCw8jKZz/go-metrics?orgId=1&refresh=5s&panelId=8" className='w-full h-full'></iframe></ResizablePanel>
                        </ResizablePanelGroup>
                    </ResizablePanel>

                </ResizablePanelGroup>
            </div>
        </div>
    )
}

export default Dashboard