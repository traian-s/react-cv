import React from "react";
import html2canvas from "html2canvas";
import JsPdf from 'jspdf';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Export = () => {
    const exportCV = () => {
        window.scrollTo(0, 0);
        html2canvas(document.querySelector("#printable"))
            .then(canvas => {
                const imgData = canvas.toDataURL('image/png');
                const imgWidth = 210;
                const pageHeight = 298;
                const imgHeight = (canvas.height * imgWidth) / canvas.width;
                let heightLeft = imgHeight;

                const doc = new JsPdf('p', 'mm');
                let position = 0;

                doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;

                while (heightLeft >= 0) {
                    position = heightLeft - imgHeight;
                    doc.addPage();
                    doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                    heightLeft -= pageHeight;
                }
                doc.save('CV Traian Stanciu.pdf');
            });
    };
    return (
        <a onClick={() => exportCV()}>
            <FontAwesomeIcon icon={'download'} />
            Download
        </a>
    )
}