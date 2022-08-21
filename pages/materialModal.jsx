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
    const [material, setMaterial] = useState(null)
    const [name, setName] = useState('')
    const [e, setE] = useState('205000')
    const [weight, setWeight] = useState("")
    useEffect(() => {
        if (window) {
            electron.ipcRenderer.invoke("get-file-data").then(res => {
                setFileData(res)
                res.temp.materials ? dispatch(setMaterials(res.temp.materials)) :dispatch(setMaterials(res.materials))
                res.temp.material && 
                    setMaterial(res.temp.material)
                    setName(res.temp.material.name)
                    setE(res.temp.material.e)
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
        electron.ipcRenderer.send('save-file', {...fileData, temp: {...fileData.temp, materials:[...materials, newMaterial]}})
        electron.ipcRenderer.send('closeMaterialModal')
        setName("");
        setE("");
    };

    const updateMaterialHandler = () => {
        electron.ipcRenderer.send('save-file',{...fileData, temp:{...fileData.temp, material:null,
        materials: materials.map(m => m.id === material.id ? {...m, name, e} : m)}})
        electron.ipcRenderer.send('closeMaterialModal')
    }

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
                            <label>Material Notes</label>
                            <Button title="Modify/Show Notes" className="w-[180px]"/>
                        </div>
                    </div>
                </div>
                <div className="border border-black p-3 relative">
                    <SectionTitle title="Material Weight and Mass"/>
                    <div className={boxStyles}>
                        <div className={rowStyles}>
                            <span>Weight per Unit Volume</span>
                            <div className="flex gap-1 -translate-x-5">
                                <input type="text" value={weight} onChange={e=>setWeight(prev=>isNaN(+e.target.value) ? prev : e.target.value)} className={smallInputStyles}/>
                                <span>N/mm³</span>
                            </div>
                        </div>
                        <div className={rowStyles}>
                            <span>Mass per Unit Volume</span>
                            <div className="flex gap-1">
                                <input type="text" value={(+weight / 9.81).toFixed(2)} className={smallInputStyles} disabled/>
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
                        <div className={rowStyles}>
                            <span>Yield Stress, F<sub>y</sub></span>
                            <div className="flex gap-1 -translate-x-[1px]">
                                <input type="text" className={inputStyles}/>
                                <span>MPa</span>
                            </div>
                        </div>
                        <div className={rowStyles}>
                            <span>Ultimate Stress, F<sub>u</sub></span>
                            <div className="flex gap-1 -translate-x-[1px]">
                                <input type="text" className={inputStyles}/>
                                <span>MPa</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end gap-2">
                    <Button title='Cancel' className="w-20 bg-red-400 hover:bg-red-600 "
                            onClick={() => electron.ipcRenderer.send('closeMaterialModal')}/>
                    <Button title="OK" className="w-20" onClick={material ? updateMaterialHandler :addMaterialHandler}/>
                </div>
            </div>
        </div>
);
}

export default MaterialModal;
