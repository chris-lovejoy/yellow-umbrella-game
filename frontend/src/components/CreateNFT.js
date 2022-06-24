import { useEffect, useState } from 'react'
import { Contract, ethers } from 'ethers'
import axios from "axios"
import { uploadIPFS } from '../helper/uploadIPFS';
import P5Wrapper, { ReactP5Wrapper } from 'react-p5-wrapper';
import sketch from '../helper/sketch';
import baseline from '../helper/baseline';

export default function CreateNFT({
    provider,
    geneticNFTAddress,
    GeneticNFT,
     currentAccount
 }) {
    const [file, setFile] = useState();
    const [fileHash, setFileHash] = useState(ethers.utils.id("placeholderHash"));
    const [fileUploaded, setFileUploaded] = useState(false);

    const submit = async event => {
        event.preventDefault()

        var fr = new FileReader();
        fr.onload=function(text) {
            console.log("file contents are:", text.target.result)
            const new_file_hash = ethers.utils.id(text.target.result);
            console.log("The file hash is:", new_file_hash)
            setFileHash(new_file_hash)
        }
        fr.readAsText(file);

        setFileUploaded(true) // TODO: move this to after successful file upload, once 
        // added appropriate error handling

        const formData = new FormData()
        formData.append("file", file, `${currentAccount}.txt`)

        const result = await axios.post('/api/images', formData, { headers: {'Content-Type': 'multipart/form-data'}})
        console.log(result.data)

    }
    

    async function mintNFT() {
        const signer = provider.getSigner()
        const geneticNFTcontract = new ethers.Contract(geneticNFTAddress, GeneticNFT.abi, signer)

        console.log("The current file hash is ", fileHash)
        console.log("Uploading to IPFS now... Time taken can vary.")

        const metadata = await uploadIPFS()

        console.log("metadata for NFT is:", metadata)

        const tokenURI = `https://ipfs.io/ipfs/${metadata.ipnft}/metadata.json`

        let transaction = await geneticNFTcontract.createNFT(tokenURI, fileHash)

        await transaction.wait()
        console.log("NFT has been minted. Transaction hash: ", transaction.hash)

    }

  return (
    <>
        <section id="dataUpload" className="w-full">
            <div className="container flex flex-col items-center justify-center px-6 mx-auto">

                    <form className="mt-6" onSubmit={submit}>
                        <input filename={file} onChange={e => setFile(e.target.files[0])} 
                        type="file" accept=".txt, .vcf"
                        className="flex justify-center items-center
                        rounded-full 
                        text-ctext mx-auto
                        hover:duration-300 shadow-btns hover:border-1 
                        file:text-lightGray file:bg-darkGray
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:hover:duration-300 file:shadow-btns file:hover:ease duration-300 file:hover:text-midGray
                        file:hover:border-1 file:hover:shadow-btna file:hover:border-[#444]"
                        /> 

                        {file && (
                        <div className="neumorphic-switch-1 mb-12">
                            <input id="switch-1" type="checkbox" checked />
                            <label htmlFor="switch-1"></label>
                        </div>
                        )}

                        {!file && (
                        <div className="neumorphic-switch">
                            <input id="switch-1" type="checkbox" />
                            <label htmlFor="switch-1"></label>
                        </div>
                        )}
                        
                       <div className="flex p-6 pb-3 ml-11 text-lightGray">
                            <em>Need to download your DNA file?</em>
                        </div>
                        <div className="container flex-row space-x-6 text-center text-lightGray">
                            <a href="/ancestry" target="_blank" className="hover:text-midGray">Ancestry</a>
                            <a href="/23andme" target="_blank" className="hover:text-midGray">23andMe</a>
                            <a href="/myheritage" target="_blank" className="hover:text-midGray">MyHeritage</a>
                        </div>

                        <div className="ml-20 justify-content align-content">
                            <button className="rounded-full p-3
                             px-6 mt-9 text-lightGray bg-midGray hover:bg-gray-200"
                            type="submit">Submit DNA file</button>
                        </div>
                    </form>
                 
            </div>
        </section>

        <section id="mintNFT">
            <div className="container flex-col items-center px-6 mx-auto">
                {!fileUploaded && (
                    <div id="sketch-holder" className="flex mx-auto mt-8">
                        <ReactP5Wrapper sketch={baseline} hash={fileHash}></ReactP5Wrapper>
                   </div>
                )}
                {fileUploaded && (
                    <div id="canvas" className="flex mx-auto mt-8">
                        <ReactP5Wrapper sketch={sketch} hash={fileHash}></ReactP5Wrapper>
                    </div>
                )}

                {!fileUploaded && (
                    <button className="flex mx-auto mt-6 rounded-full p-3
                    px-6 text-lightGray bg-midGray hover:bg-gray-600">Mint my NFT</button>
                )}

                {fileUploaded && (
                    <button className="flex mx-auto mt-6 rounded-full p-3
                    px-6 text-lightGray bg-midGray hover:bg-gray-200" onClick={mintNFT}>Mint my NFT</button>
                )}
            </div>

        </section>

        <section id="displayNFT">
           
        </section>

    </>
  )
}
