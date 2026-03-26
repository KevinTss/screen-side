import { useEffect } from "react"
import { createGlobalStyle } from "styled-components"
import {
  Overlay,
  ModalContainer,
  ModalBar,
  CloseButton,
  DownloadButton,
  Sheet,
} from "./style"
import CVContent from "./CVContent"

const PrintStyle = createGlobalStyle`
  @media print {
    @page {
      margin: 10mm 10mm;
      size: A4 portrait;
    }

    body {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    /* Hide everything except the modal CV content */
    body.cv-open header,
    body.cv-open footer,
    body.cv-open main {
      display: none !important;
    }

    /* Reset overlay to static flow */
    .cv-overlay {
      position: static !important;
      background: none !important;
      padding: 0 !important;
      backdrop-filter: none !important;
      display: block !important;
    }

    /* Reset modal container */
    .cv-modal-container {
      width: 100% !important;
      height: auto !important;
      box-shadow: none !important;
      overflow: visible !important;
      border-radius: 0 !important;
    }

    /* Hide modal action bar */
    .cv-modal-bar {
      display: none !important;
    }

    /* Let sheet content flow freely */
    .cv-sheet {
      overflow: visible !important;
      padding: 0 !important;
      flex: none !important;
    }

    /* Compact CV content for A4 */
    .cv-name       { font-size: 18px !important; margin-bottom: 2px !important; }
    .cv-title      { font-size: 11px !important; margin-bottom: 3px !important; }
    .cv-contact    { font-size: 10px !important; }
    .cv-divider    { margin: 5px 0 4px !important; }
    .cv-section    { font-size: 9px !important; margin: 7px 0 3px !important; padding-bottom: 2px !important; }
    .cv-job        { margin-bottom: 5px !important; }
    .cv-job-title  { font-size: 10px !important; }
    .cv-job-meta   { font-size: 9px !important; }
    .cv-company    { font-size: 10px !important; margin: 1px 0 2px !important; }
    .cv-role-row   { font-size: 9px !important; margin-bottom: 1px !important; }
    .cv-bullets    { margin: 1px 0 0 12px !important; }
    .cv-bullet     { font-size: 9px !important; margin-bottom: 1px !important; line-height: 1.3 !important; }
    .cv-summary    { font-size: 10px !important; line-height: 1.35 !important; }
    .cv-skills     { gap: 3px 16px !important; margin-top: 2px !important; }
    .cv-skill-row  { font-size: 9px !important; }
  }
`

interface Props {
  onClose: () => void
}

const CVModal = ({ onClose }: Props) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = "hidden"
    document.body.classList.add("cv-open")
    return () => {
      document.body.style.overflow = ""
      document.body.classList.remove("cv-open")
    }
  }, [])

  return (
    <>
      <PrintStyle />
      <Overlay onClick={onClose}>
        <ModalContainer onClick={e => e.stopPropagation()}>
          <ModalBar>
            <DownloadButton onClick={() => window.print()}>
              Download PDF
            </DownloadButton>
            <CloseButton onClick={onClose} aria-label="Close CV">
              &#x2715;
            </CloseButton>
          </ModalBar>
          <Sheet>
            <CVContent />
          </Sheet>
        </ModalContainer>
      </Overlay>
    </>
  )
}

export default CVModal
