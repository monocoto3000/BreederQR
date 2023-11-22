import SubCard from "./ui-component/cards/SubCard";
import MainCard from './ui-component/cards/MainCard';
import { Grid } from '@mui/material';
import { useState } from 'react';
import uniqid from 'uniqid';
import "../Components/Anexos.css"

export default function Anexos() {
    const [Files, SetFiles] = useState([]);
    const [selectedfile, SetSelectedFile] = useState([]);

    // const DeleteFile = async (id) => {
    //     if (window.confirm("¿Seguro/a que desea borrar ese documento?")) {
    //         const result = Files.filter((data) => data.id !== id);
    //         SetFiles(result);
    //     } else {
    //         // alert('No');
    //     }
    // }

    const FileUploadSubmit = async (e) => {
        e.preventDefault();
        // form reset on submit 
        if (selectedfile.length > 0) {
            for (let index = 0; index < selectedfile.length; index++) {
                SetFiles((preValue) => {
                    return [
                        ...preValue,
                        selectedfile[index]
                    ]
                })
            }
            SetSelectedFile([]);
        } else {
            alert('No ha seleccionado ningun documento')
        }
    }
    const filesizes = (bytes, decimals = 2) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
    const InputChange = (e) => {
        // --For Multiple File Input
        let images = [];
        for (let i = 0; i < e.target.files.length; i++) {
            images.push((e.target.files[i]));
            let reader = new FileReader();
            let file = e.target.files[i];
            reader.onloadend = () => {
                let subCadena = reader.result.split(",")
                SetSelectedFile((preValue) => {
                    return [
                        ...preValue,
                        {
                            id: uniqid(),
                            nombre: e.target.files[i].name,
                            tipo: e.target.files[i].type.toString(),
                            contenido: subCadena[1],
                            imagen: reader.result,
                            datetime: e.target.files[i].lastModifiedDate.toLocaleString('en-IN'),
                            filesize: filesizes(e.target.files[i].size)
                        }
                    ]
                });
            }
            if (e.target.files[i]) {
                reader.readAsDataURL(file);
            }
        }
    }
    const DeleteSelectFile = (id) => {
        if (window.confirm("¿Seguro/a que desea borrar ese documento?")) {
            const result = selectedfile.filter((data) => data.id !== id);
            SetSelectedFile(result);
        } else {
            // alert('No');
        }
    }
    console.log(selectedfile)
    return (
        <div>
            <MainCard title="Anexos">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <div className="fileupload-view">
                                    <div className="row justify-content-center m-0">
                                        <div className="col-md-6">
                                            <div className="card mt-5">
                                                <div className="card-body">
                                                    <div className="kb-data-box">
                                                        <div className="kb-modal-data-title">
                                                            <div className="kb-data-title">
                                                                <h6>Subir documentos e imagenes</h6>
                                                            </div>
                                                        </div>
                                                        <form>
                                                            <div className="kb-file-upload">
                                                                <div className="file-upload-box">
                                                                    <input type="file" id="fileupload" className="file-upload-input" onChange={InputChange} multiple />
                                                                    <span>Arrastra y suelta o <span className="file-link">Seleccione sus documentos</span></span>
                                                                </div>
                                                            </div>
                                                            <div className="kb-attach-box mb-3">
                                                                {selectedfile.map((data) => {
                                                                    const { id, nombre, contenido, imagen, datetime, filesize } = data;
                                                                    return (
                                                                        <div className="file-atc-box" key={id}>
                                                                            {nombre.match(/.(jpg|jpeg|png|gif|svg)$/i) ?
                                                                                <div className="file-image"> <img src={imagen} alt="" /></div> :
                                                                                <div className="file-image"><i className="far fa-file-alt"></i></div>}
                                                                            <div className="file-detail">
                                                                                <h6>{nombre}</h6>
                                                                                <p></p>
                                                                                <p><span>Size : {filesize}</span><span className="ml-2"><br></br>Tiempo de modificación : {datetime}</span></p>
                                                                                <div className="file-actions">
                                                                                    <button type="button" className="file-action-btn" onClick={() => DeleteSelectFile(id)}>Eliminar</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    );
                                                                })}
                                                            </div>
                                                            <div className="kb-buttons-box">
                                                                <button onClick={FileUploadSubmit} className="btn btn-primary form-submit" type="submit">Subir</button>
                                                            </div>
                                                        </form>
                                                        {Files.length > 0 ?
                                                            <div className="kb-attach-box">
                                                                <hr />
                                                                {Files.map((data, index) => {
                                                                    const { nombre, contenido, imagen, datetime, filesize } = data;
                                                                    return (
                                                                        <div className="file-atc-box" key={index}>
                                                                            {nombre.match(/.(jpg|jpeg|png|gif|svg)$/i) ?
                                                                                <div className="file-image"> <img src={imagen} alt="" /></div> :
                                                                                <div className="file-image"><i className="far fa-file-alt"></i></div>}
                                                                            <div className="file-detail">
                                                                                <h6>{nombre}</h6>
                                                                                <p><span>Tamaño: {filesize}</span><span className="ml-3">Tiempo de modificación: {datetime}</span></p> 
                                                                                <div className="file-actions">
                                                                                    <a href={contenido} className="file-action-btn" download={nombre}>Descargar</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    );
                                                                })}
                                                            </div>
                                                            : ''}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </MainCard>
        </div>
    )
}