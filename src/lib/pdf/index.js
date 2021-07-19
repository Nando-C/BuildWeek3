import PdfPrinter from 'pdfmake'
import striptags from 'striptags'
import axios from 'axios'
import profilesRouter from '../../profile'

export const generatePDFReadableStream = async (profile, experience) => {
    const fonts = {
        Roboto: {
            normal: "Helvetica",
            bold: "Helvetica-Bold",
            italics: "Helvetica-Oblique",
            bolditalics: "Helvetica-Oblique",
        }
    }

    let profileImg = {}
    if(profile.image) {
        const response = await axios.get(profile.image, {
            responseType: "arraybuffer"
        })
        const profileImgURLParts = profile.image.split("/")
        const fileName = profileImgURLParts[profileImgURLParts.length -1]
        const [id, extension] = fileName.split(".")
        const base64 = response.data.toString("base64")
        const base64Img = `data:image/${extension};base64,${base64}`
        profileImg = { image: base64Img, width: 250, margin: [0, 0, 0, 30] }
    }
    const printer = new PdfPrinter(fonts)

    const docDefinition = {
        content: [
           
        ],
        styles: {
            header: {
                fontSize: 16,
                bold: true,
                margin: [0, 0, 0, 10]
            },
            subheader: {
                fontSize: 12,
			    bold: true,
                margin: [5, 5, 5, 10]
            },
            tableExample: {
                margin: [5, 5, 5, 10]
            },
            tableHeaders: {
                bold: true,
                alignment: 'center',
                margin: [0, 10, 0, 10]
            }
        }
    }

    const pdfReadableStream = printer.createPdfKitDocument(docDefinition, {})
    pdfReadableStream.end()
    return pdfReadableStream
}