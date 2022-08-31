import React from 'react'

function AboutUs() {
    return (
        <div className='h-full flex flex-col py-10 px-6 gap-6'>
            <h1 className="text-[#9e2235] chronicle-font text-3xl ">Modular Prefab Design Laboratory
                (MPD-Lab)</h1>
            <p>
                <img className="float-right my-2 ml-2"
                     src="https://www.westernsydney.edu.au/__data/assets/image/0006/1637862/PejmanImage.png"
                     alt="PejImage" width="400px" height="300px"/>
                Two major challenges of the built environment today are rapid urbanisation and the need for sustainable
                development. In order to address these two major issues, there is a growing interest in the
                architecture, engineering, and construction industry in developing design practices for methods that
                allow for greater efficiency and precision, are environmentally responsible, make better use of
                resources and workforce, and provide shorter construction cycles to obtain efficiency from large scale
                mass produced buildings. Modular construction through manufacturing prefabricated systems is one
                solution for the construction industry that has long been criticised for shortcomings in efficiency,
                quality, affordability, sustainability and socio-environmental responsiveness.
            </p>
            <p>
                Modular prefabricated systems are proving, increasingly, to be a viable and effective approach that can
                offer significant construction time and energy efficiency, lower life cycle costs, greater quality
                control in a closely supervised environment, and reduced waste. Application of such efficient
                construction methods can also address the existing gap between demand and supply for housing worldwide.
                <br/><br/>

                Our research program aims to remove major roadblocks preventing widespread application of modular
                prefabricated systems in construction and transformation to advanced building manufacturing technologies
                in Australia and beyond. MPD-Lab conducts leading-edge research that focuses on design of modular and
                prefab construction engineering technologies/systems, and provides advanced numerical, analytical and
                experimental services. As well as being available for advanced research work, MPD-Lab is also available
                for consulting and teaching activities and services relating to the area of modular prefab construction.
                <br/><br/>
                MPD-Lab works in collaboration with other partners in academia, industry and government. Please feel
                free to get in touch, if you are interested in pursuing collaboration or consulting services.
            </p>
            <div className="flex flex-row w-full gap-6 items-start">
                <img src="https://www.westernsydney.edu.au/__data/assets/image/0009/1408158/Pejman_Sharafi_final.jpg"
                     alt="" width="200" height="250"/>
                <div className="flex flex-col gap-2 ">
                    <h3 className="text-xl text-[#9e2235] font-bold ">Dr. Pejman Sharafi</h3>
                    <div className="flex flex-col text-[#333] font-bold text-sm ">
                        <strong>
                            Senior Lecturer in Structures
                        </strong>
                        <strong>
                            ARC Senior Research Fellow - DECRA
                        </strong>
                        <strong>
                            Associate HDR Director
                        </strong>
                    </div>
                    <p className="">
                        Research interests include: structural optimisation, advanced structural systems, modular
                        buildings, prefabricated construction systems, cost optimisation of structures, sustainable
                        structures, computer aided design and parametric design.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs