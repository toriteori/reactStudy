import React from "react";

// 1. 타입 정의
type SeatCategory =
  | "backoffice"
  | "backend"
  | "frontend"
  | "native"
  | "planning"
  | "publishing"
  | "design"
  | "qa"
  | "empty"
  | "default";

interface SeatProps {
  name?: string;
  rank?: string;
  category: SeatCategory;
  status?: "오전 반차" | "육아 휴직" | string;
  isLarge?: boolean;
}

// 2. 부서별 스타일 매핑 (Tailwind Class)
const CATEGORY_STYLES: Record<SeatCategory, string> = {
  backoffice: "bg-pink-50 text-pink-600",
  backend: "bg-indigo-50 text-indigo-600",
  frontend: "bg-blue-50 text-blue-600",
  native: "bg-emerald-50 text-emerald-600",
  planning: "bg-orange-50 text-orange-600",
  publishing: "bg-lime-50 text-lime-600",
  design: "bg-yellow-50 text-yellow-600",
  qa: "bg-stone-100 text-stone-600",
  empty: "bg-white border-2 border-dashed border-gray-100 text-gray-300",
  default: "bg-gray-50 text-gray-500",
};

// 3. 개별 좌석 컴포넌트
const Seat: React.FC<SeatProps> = ({ name, rank, category, status, isLarge }) => {
  const isEmpty = category === "empty";

  return (
    <div
      className={`relative flex flex-col items-center justify-center rounded-lg text-xs transition-all
      ${isLarge ? "w-24 h-40" : "w-24 h-24"} 
      ${CATEGORY_STYLES[category]} shadow-sm`}
    >
      {/* 상태 표시 태그 (상단 검정 바) */}
      {status && (
        <div className="absolute top-0 left-0 right-0 h-6 bg-slate-700 text-white text-[10px] rounded-t-lg flex items-center justify-center gap-1">
          {status === "오전 반차" && <span className="scale-75">☕</span>}
          {status === "육아 휴직" && <span className="scale-75">👶</span>}
          {status}
        </div>
      )}

      <div className={`flex flex-col items-center ${status ? "mt-4" : ""}`}>
        <span className="text-[13px] font-bold leading-tight">{name || "빈좌석"}</span>
        {!isEmpty && rank && (
          <span className="text-[10px] mt-1 opacity-60 font-medium">{rank}</span>
        )}
      </div>
    </div>
  );
};

// 4. 메인 배치도 컴포넌트
const SeatingChart: React.FC = () => {
  return (
    <>
      {/* 상단 타이틀 */}
      <header className="mb-12">
        <h1 className="text-2xl font-bold flex items-center gap-3">
          케어네이션 3F
          <span className="text-sm font-normal text-gray-400 mt-1">(25.7월 7일 기준)</span>
        </h1>
      </header>

      <main className="flex gap-24 items-start">
        {/* 배치 구역 */}
        <div className="flex flex-col gap-10">
          {/* Section 1: Backoffice */}
          <div className="flex gap-4">
            <Seat name="XXXX" rank="선임" category="backoffice" status="오전 반차" isLarge />
            <div className="grid grid-cols-5 gap-3">
              <Seat name="정화정" rank="매니저" category="backoffice" />
              <Seat name="김성현" rank="매니저" category="backoffice" />
              <Seat category="empty" />
              <Seat category="empty" />
              <Seat category="empty" />
              <Seat name="이영훈" rank="매니저" category="backoffice" />
              <Seat name="정요직" rank="매니저" category="backoffice" />
              <Seat name="오연수" rank="매니저" category="backoffice" status="오전 반차" />
              <Seat category="empty" />
              <Seat category="empty" />
            </div>
          </div>

          {/* Section 2: Dev Teams */}
          <div className="flex gap-4">
            <Seat name="박영섭" rank="책임" category="default" status="오전 반차" isLarge />
            <div className="grid grid-cols-5 gap-3">
              <Seat name="정명훈" rank="선임" category="backend" />
              <Seat name="안재우" rank="매니저" category="backend" />
              <Seat name="이승현" rank="매니저" category="backend" status="육아 휴직" />
              <Seat name="정지윤" rank="매니저" category="backend" />
              <Seat name="황민희" rank="선임" category="backend" />
              <Seat name="오국화" rank="선임" category="frontend" />
              <Seat name="신진섭" rank="매니저" category="frontend" />
              <Seat name="김소리" rank="매니저" category="frontend" />
              <Seat name="이지연" rank="매니저" category="frontend" />
              <Seat category="empty" />
            </div>
          </div>

          {/* Section 3: Planning */}
          <div className="flex gap-4">
            <Seat name="최용은" rank="수석" category="default" isLarge />
            <div className="grid grid-cols-5 gap-3">
              {[...Array(6)].map((_, i) => (
                <Seat key={`empty-${i}`} category="empty" />
              ))}
              <Seat name="이송은" rank="매니저" category="planning" />
              <Seat category="empty" />
              <Seat category="empty" />
              <Seat name="한지우" rank="매니저" category="planning" />
            </div>
          </div>
        </div>

        {/* 우측 범례 (Legend) */}
        <aside className="sticky top-12 p-6 border border-gray-100 rounded-2xl shadow-sm bg-white w-44">
          <ul className="space-y-4">
            {(
              [
                "backoffice",
                "backend",
                "frontend",
                "native",
                "planning",
                "publishing",
                "design",
                "qa",
              ] as const
            ).map((cat) => (
              <li key={cat} className="flex items-center gap-3 text-xs font-medium text-gray-500">
                <span className={`w-4 h-4 rounded ${CATEGORY_STYLES[cat].split(" ")[0]}`} />
                {cat === "backoffice" && "백오피스"}
                {cat === "backend" && "백엔드"}
                {cat === "frontend" && "프론트"}
                {cat === "native" && "네이티브"}
                {cat === "planning" && "기획"}
                {cat === "publishing" && "퍼블"}
                {cat === "design" && "디자인"}
                {cat === "qa" && "QA"}
              </li>
            ))}
          </ul>
        </aside>
      </main>
    </>
  );
};

export default SeatingChart;
