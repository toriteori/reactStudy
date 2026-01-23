import { useState } from "react";

// 컴포넌트를 만들 때, 사용하는 데이터 타입 정의
interface PopupProps {
  isActive: boolean;
  // void 를 반환하라는 건, 결과값이 없다는 것을 의미
  close: () => void;
}

// 팝업 상태를 관리하는 Custom Hook
export const usePopup = () => {
  const [isActive, setIsActive] = useState(false);

  const open = () => setIsActive(true);
  const close = () => setIsActive(false);

  return { isActive, open, close };
};

const Popup = ({ isActive, close }: PopupProps) => {
  return (
    <dialog className="popup" open={isActive}>
      <div className="popupInner">
        <div className="popupInner__head"></div>
        <div className="popupInner__cont">
          <p>팝업 컨텐츠 자리입니다.</p>
        </div>
        <div className="popupInner__bot">
          <div className="btnWrap">
            <button type="button" onClick={() => close()}>
              취소
            </button>
            <button type="button" onClick={() => close()}>
              확인
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Popup;
