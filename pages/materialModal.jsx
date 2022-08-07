import React, {useState, useEffect} from "react";
import Button from "../src/components/Button";
import SectionTitle from "../src/components/SectionTitle";
import {useSelector, useDispatch} from "react-redux";
import {addMaterial, setMaterials} from "../redux/slices/material";
import {v4 as uuidv4} from "uuid";

const inputStyles = "w-[180px] border bg-slate-50";
const smallInputStyles = "w-[140px] border bg-slate-50";
const boxStyles = "flex flex-col gap-4 px-6 py-4";
const rowStyles = "flex justify-between items-center";

function MaterialModal() {
    const dispatch = useDispatch()
    const {materials} = useSelector((state) => state.material);
    const [fileData, setFileData] = useState()
    const [name, setName] = useState('')
    const [e, setE] = useState('205000')
    useEffect(() => {
        if (window) {
            electron.ipcRenderer.invoke("get-file-data").then(res => {
                setFileData(res)
                dispatch(setMaterials(res.materials))
            }).catch(e => console.log(e))
        }
    }, [])
    const addMaterialHandler = () => {
        const newMaterial = {
            id: uuidv4(),
            name,
            e,
        };
        dispatch(addMaterial(newMaterial));
        electron.ipcRenderer.send('save-file', {...fileData, materials: [...materials, newMaterial]})
        electron.ipcRenderer.send('closeMaterialModal')
        setName("");
        setE("");
    };

    return (
        <div className="p-4 material-window">
            <div className=" p-4 h-full flex flex-col gap-8">
                <div className="border border-black p-3 relative">
                    <SectionTitle title="General Data"/>
                    <div className={boxStyles}>
                        <div className={rowStyles}>
                            <label htmlFor="material-name">Material Name</label>
                            <input className={inputStyles} value={name} onChange={(e) => setName(e.target.value)}
                                   type="text" id="material-name" placeholder="Steel-1"/>
                        </div>
                        <div className={rowStyles}>
                            <label htmlFor="">Material Type</label>
                            <select id="" className={inputStyles}>
                                <option value="">Steel</option>
                            </select>
                        </div>
                        <div className={rowStyles}>
                            <label>Directional Symmetry Type</label>
                            <select id="" className={inputStyles}>
                                <option value="">Isotropic</option>
                            </select>
                        </div>
                        <div className={rowStyles}>
                            <label>Material Display Color</label>
                            <div className="w-[180px] flex">
                                <input type="color" className="w-full cursor-pointer rounded "/>
                            </div>
                        </div>
                        <div className={rowStyles}>
                            <label>Material Notes</label>
                            <Button title="Modify/Show Notes" className="w-[180px]"/>
                        </div>
                    </div>
                </div>
                <div className="border border-black p-3 relative">
                    <SectionTitle title="Material Weight and Mass"/>
                    <div className={boxStyles}>
                        <div className={rowStyles}>
                            <label>
                                <input type="radio" name="weight"/>
                                <span>Specify Weight Density</span>
                            </label>
                            <label>
                                <input type="radio" name="weight"/>
                                <span>Specify Mass Density</span>
                            </label>
                        </div>
                        <div className={rowStyles}>
                            <span>Weight per Unit Volume</span>
                            <div className="flex gap-1 -translate-x-5">
                                <input type="text" defaultValue="0.000077" className={smallInputStyles}/>
                                <span>N/mm³</span>
                            </div>
                        </div>
                        <div className={rowStyles}>
                            <span>Mass per Unit Volume</span>
                            <div className="flex gap-1">
                                <input type="text" defaultValue="7.849E-09" className={smallInputStyles}/>
                                <span>N-s²/mm⁴</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border border-black p-3 relative">
                    <SectionTitle title="Mechanical Property Data"/>
                    <div className={boxStyles}>
                        <div className={rowStyles}>
                            <span>Modulus of Elasticity, E</span>
                            <div className="flex gap-1">
                                <input value={e} onChange={(e) => setE(e.target.value)} type="text"
                                       className={inputStyles}/>
                                <span>MPa</span>
                            </div>
                        </div>
                        <div className={rowStyles}>
                            <span>Poisson&apos;s Ratio, U</span>
                            <div className="-translate-x-9">
                                <input type="text" defaultValue="0.3" className={inputStyles}/>
                            </div>
                        </div>
                        <div className={rowStyles}>
                            <span>Coefficient of Thermal Expansion, A</span>
                            <div className="flex gap-1 -translate-x-[7px]">
                                <input type="text" defaultValue="0.0000117" className={inputStyles}/>
                                <span>1/C</span>
                            </div>
                        </div>
                        <div className={rowStyles}>
                            <span>Shear Modulus, G</span>
                            <div className="flex gap-1 -translate-x-[1px]">
                                <input type="text" defaultValue="78846.15" className={inputStyles}/>
                                <span>MPa</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border py-6 relative flex justify-center">
                    <SectionTitle title="Design Property Data"/>
                    <Button title='Modify/Show Material Property Design Data' className="translate-y-1"/>
                </div>
                <div className="border py-6 relative flex justify-center gap-4">
                    <SectionTitle title="Advanced Material Property Data"/>
                    <Button title='Nonlinear Material Data' className="translate-y-1"/>
                    <Button title='Material Damping Properties' className="translate-y-1"/>
                </div>
                <div className="flex justify-end gap-2">
                    <Button title='Cancel' className="w-20 bg-red-400 hover:bg-red-600 "
                            onClick={() => electron.ipcRenderer.send('closeMaterialModal')}/>
                    <Button title="Save" className="w-20" onClick={addMaterialHandler}/>
                </div>
            </div>
        </div>
);
}

export default MaterialModal;
