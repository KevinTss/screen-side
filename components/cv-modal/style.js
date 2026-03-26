import styled from "styled-components"
import { COLOR } from "../../utils/constants"

export const Overlay = styled.div.attrs({ className: "cv-overlay" })`
  position: fixed;
  inset: 0;
  background: rgba(29, 37, 79, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: 20px;
  backdrop-filter: blur(2px);
`

/* A4 ratio: 210 / 297 ≈ 0.707 — height drives width */
export const ModalContainer = styled.div.attrs({ className: "cv-modal-container" })`
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: min(calc(90vh * 0.707), calc(100vw - 40px));
  background: white;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.35);
`

export const ModalBar = styled.div.attrs({ className: "cv-modal-bar" })`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  padding: 10px 16px;
  background: ${COLOR.CLOUD_BURST};
  flex-shrink: 0;
`

export const DownloadButton = styled.button`
  background: white;
  color: ${COLOR.CLOUD_BURST};
  border: none;
  padding: 6px 16px;
  font-size: 13px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.15s;

  &:hover {
    opacity: 0.85;
  }
`

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
  padding: 4px 6px;
  border-radius: 4px;
  transition: background 0.15s;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`

export const Sheet = styled.div.attrs({ className: "cv-sheet" })`
  flex: 1;
  overflow-y: auto;
  padding: 36px 40px;
  font-family: Arial, Helvetica, sans-serif;
  color: #1a1a2e;
  line-height: 1.5;
  font-size: 14px;
`
