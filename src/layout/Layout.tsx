import React from 'react'
import {Footer, Header, Sidebar, Main} from './'

function Layout(props:any) {
  return (
    <div>
        <div className="p-2 text-white bg-slate-900">
            <div className="grid grid-cols-12 gap-2">
                <div className="col-span-2 p-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-span-10">
                    <div className="grid grid-cols-12 gap-2">
                        <div className="col-span-12"><Header></Header></div>
                        <div className="col-span-12">
                            <Main>
                                {props.children}
                            </Main>
                        </div>
                        <div className="col-span-12"><Footer></Footer></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Layout