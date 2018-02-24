import React from 'react'
// import pdf_en from './index/pdf/resume-english.pdf'
// import pdf_lt from './index/pdf/resume-lietuviskai.pdf'

const ModalResume = () => (
    <div id="modal_resume" className="modal">
        <div className="modal-wrap">
            <div className="modal-header">
                <h3 className="modal-header--heading">Choose résumé</h3>
                <div id="btn_modal_close" className="modal-header--close">&times;</div>
            </div>
            <div className="modal-body">
                <a href="/resume-english.pdf" target="_blank" rel="noopener" className="icon-flag--en" aria-label="open english resume"></a>
                <a href="/resume-lietuviskai.pdf" target="_blank" rel="noopener" className="icon-flag--lt" aria-label="open lithuanian resume"></a>
            </div>
        </div>
    </div>
)

export default ModalResume