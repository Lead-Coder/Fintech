import type React from "react"

// Line Chart Component
export const LineChart: React.FC = () => {
  return (
    <svg className="w-full h-full" viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Grid Lines */}
      <line x1="0" y1="0" x2="0" y2="150" stroke="#e5e7eb" strokeWidth="1" />
      <line x1="60" y1="0" x2="60" y2="150" stroke="#e5e7eb" strokeWidth="1" />
      <line x1="120" y1="0" x2="120" y2="150" stroke="#e5e7eb" strokeWidth="1" />
      <line x1="180" y1="0" x2="180" y2="150" stroke="#e5e7eb" strokeWidth="1" />
      <line x1="240" y1="0" x2="240" y2="150" stroke="#e5e7eb" strokeWidth="1" />
      <line x1="300" y1="0" x2="300" y2="150" stroke="#e5e7eb" strokeWidth="1" />

      <line x1="0" y1="0" x2="300" y2="0" stroke="#e5e7eb" strokeWidth="1" />
      <line x1="0" y1="30" x2="300" y2="30" stroke="#e5e7eb" strokeWidth="1" />
      <line x1="0" y1="60" x2="300" y2="60" stroke="#e5e7eb" strokeWidth="1" />
      <line x1="0" y1="90" x2="300" y2="90" stroke="#e5e7eb" strokeWidth="1" />
      <line x1="0" y1="120" x2="300" y2="120" stroke="#e5e7eb" strokeWidth="1" />
      <line x1="0" y1="150" x2="300" y2="150" stroke="#e5e7eb" strokeWidth="1" />

      {/* Line Chart */}
      <path
        d="M0,120 L30,100 L60,110 L90,80 L120,90 L150,60 L180,40 L210,50 L240,30 L270,20 L300,40"
        stroke="#3b82f6"
        strokeWidth="3"
        fill="none"
      />

      {/* Area under the line */}
      <path
        d="M0,120 L30,100 L60,110 L90,80 L120,90 L150,60 L180,40 L210,50 L240,30 L270,20 L300,40 L300,150 L0,150 Z"
        fill="url(#blue-gradient)"
        opacity="0.2"
      />

      {/* Data Points */}
      <circle cx="0" cy="120" r="4" fill="#3b82f6" />
      <circle cx="30" cy="100" r="4" fill="#3b82f6" />
      <circle cx="60" cy="110" r="4" fill="#3b82f6" />
      <circle cx="90" cy="80" r="4" fill="#3b82f6" />
      <circle cx="120" cy="90" r="4" fill="#3b82f6" />
      <circle cx="150" cy="60" r="4" fill="#3b82f6" />
      <circle cx="180" cy="40" r="4" fill="#3b82f6" />
      <circle cx="210" cy="50" r="4" fill="#3b82f6" />
      <circle cx="240" cy="30" r="4" fill="#3b82f6" />
      <circle cx="270" cy="20" r="4" fill="#3b82f6" />
      <circle cx="300" cy="40" r="4" fill="#3b82f6" />

      {/* Gradient Definition */}
      <defs>
        <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

// Bar Chart Component
export const BarChart: React.FC = () => {
  return (
    <svg className="w-full h-full" viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Grid Lines */}
      <line x1="0" y1="0" x2="0" y2="150" stroke="#e5e7eb" strokeWidth="1" />
      <line x1="0" y1="30" x2="300" y2="30" stroke="#e5e7eb" strokeWidth="1" />
      <line x1="0" y1="60" x2="300" y2="60" stroke="#e5e7eb" strokeWidth="1" />
      <line x1="0" y1="90" x2="300" y2="90" stroke="#e5e7eb" strokeWidth="1" />
      <line x1="0" y1="120" x2="300" y2="120" stroke="#e5e7eb" strokeWidth="1" />
      <line x1="0" y1="150" x2="300" y2="150" stroke="#e5e7eb" strokeWidth="1" />

      {/* Income Bars */}
      <rect x="20" y="50" width="20" height="100" rx="2" fill="#3b82f6" />
      <rect x="70" y="30" width="20" height="120" rx="2" fill="#3b82f6" />
      <rect x="120" y="60" width="20" height="90" rx="2" fill="#3b82f6" />
      <rect x="170" y="40" width="20" height="110" rx="2" fill="#3b82f6" />
      <rect x="220" y="20" width="20" height="130" rx="2" fill="#3b82f6" />
      <rect x="270" y="35" width="20" height="115" rx="2" fill="#3b82f6" />

      {/* Expense Bars */}
      <rect x="45" y="80" width="20" height="70" rx="2" fill="#ef4444" />
      <rect x="95" y="70" width="20" height="80" rx="2" fill="#ef4444" />
      <rect x="145" y="90" width="20" height="60" rx="2" fill="#ef4444" />
      <rect x="195" y="75" width="20" height="75" rx="2" fill-height="60" fill="#ef4444" />
      <rect x="195" y="75" width="20" height="75" rx="2" fill="#ef4444" />
      <rect x="245" y="65" width="20" height="85" rx="2" fill="#ef4444" />
      <rect x="295" y="60" width="20" height="90" rx="2" fill="#ef4444" />

      {/* Labels */}
      <text x="30" y="160" textAnchor="middle" fontSize="8" fill="#6b7280">
        Jan
      </text>
      <text x="80" y="160" textAnchor="middle" fontSize="8" fill="#6b7280">
        Feb
      </text>
      <text x="130" y="160" textAnchor="middle" fontSize="8" fill="#6b7280">
        Mar
      </text>
      <text x="180" y="160" textAnchor="middle" fontSize="8" fill="#6b7280">
        Apr
      </text>
      <text x="230" y="160" textAnchor="middle" fontSize="8" fill="#6b7280">
        May
      </text>
      <text x="280" y="160" textAnchor="middle" fontSize="8" fill="#6b7280">
        Jun
      </text>
    </svg>
  )
}

// Pie Chart Component
export const PieChart: React.FC = () => {
  return (
    <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Pie Slices */}
      <path d="M100,100 L100,20 A80,80 0 0,1 171.96,129.54 Z" fill="#3b82f6" />
      <path d="M100,100 L171.96,129.54 A80,80 0 0,1 100,180 Z" fill="#10b981" />
      <path d="M100,100 L100,180 A80,80 0 0,1 28.04,129.54 Z" fill="#8b5cf6" />
      <path d="M100,100 L28.04,129.54 A80,80 0 0,1 55.36,34.55 Z" fill="#f59e0b" />
      <path d="M100,100 L55.36,34.55 A80,80 0 0,1 100,20 Z" fill="#ef4444" />

      {/* Center Circle */}
      <circle cx="100" cy="100" r="40" fill="white" />
    </svg>
  )
}

// Donut Chart Component
export const DonutChart: React.FC = () => {
  return (
    <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Donut Slices */}
      <path d="M100,100 L100,20 A80,80 0 0,1 171.96,129.54 Z" fill="#3b82f6" />
      <path d="M100,100 L171.96,129.54 A80,80 0 0,1 100,180 Z" fill="#10b981" />
      <path d="M100,100 L100,180 A80,80 0 0,1 28.04,129.54 Z" fill="#8b5cf6" />
      <path d="M100,100 L28.04,129.54 A80,80 0 0,1 55.36,34.55 Z" fill="#f59e0b" />
      <path d="M100,100 L55.36,34.55 A80,80 0 0,1 100,20 Z" fill="#ef4444" />

      {/* Center Circle */}
      <circle cx="100" cy="100" r="60" fill="white" />
    </svg>
  )
}

// Area Chart Component
export const AreaChart: React.FC = () => {
  return (
    <svg className="w-full h-full" viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Grid Lines */}
      <line x1="0" y1="0" x2="0" y2="150" stroke="#e5e7eb" strokeWidth="1" />
      <line x1="60" y1="0" x2="60" y2="150" stroke="#e5e7eb" strokeWidth="1" />
      <line x1="120" y1="0" x2="120" y2="150" stroke="#e5e7eb" strokeWidth="1" />
      <line x1="180" y1="0" x2="180" y2="150" stroke="#e5e7eb" strokeWidth="1" />
      <line x1="240" y1="0" x2="240" y2="150" stroke="#e5e7eb" strokeWidth="1" />
      <line x1="300" y1="0" x2="300" y2="150" stroke="#e5e7eb" strokeWidth="1" />

      <line x1="0" y1="0" x2="300" y2="0" stroke="#e5e7eb" strokeWidth="1" />
      <line x1="0" y1="30" x2="300" y2="30" stroke="#e5e7eb" strokeWidth="1" />
      <line x1="0" y1="60" x2="300" y2="60" stroke="#e5e7eb" strokeWidth="1" />
      <line x1="0" y1="90" x2="300" y2="90" stroke="#e5e7eb" strokeWidth="1" />
      <line x1="0" y1="120" x2="300" y2="120" stroke="#e5e7eb" strokeWidth="1" />
      <line x1="0" y1="150" x2="300" y2="150" stroke="#e5e7eb" strokeWidth="1" />

      {/* Area Chart */}
      <path
        d="M0,120 L30,100 L60,110 L90,80 L120,90 L150,60 L180,40 L210,50 L240,30 L270,20 L300,40 L300,150 L0,150 Z"
        fill="url(#purple-gradient)"
        opacity="0.7"
      />

      {/* Line */}
      <path
        d="M0,120 L30,100 L60,110 L90,80 L120,90 L150,60 L180,40 L210,50 L240,30 L270,20 L300,40"
        stroke="#8b5cf6"
        strokeWidth="3"
        fill="none"
      />

      {/* Data Points */}
      <circle cx="0" cy="120" r="4" fill="#8b5cf6" />
      <circle cx="30" cy="100" r="4" fill="#8b5cf6" />
      <circle cx="60" cy="110" r="4" fill="#8b5cf6" />
      <circle cx="90" cy="80" r="4" fill="#8b5cf6" />
      <circle cx="120" cy="90" r="4" fill="#8b5cf6" />
      <circle cx="150" cy="60" r="4" fill="#8b5cf6" />
      <circle cx="180" cy="40" r="4" fill="#8b5cf6" />
      <circle cx="210" cy="50" r="4" fill="#8b5cf6" />
      <circle cx="240" cy="30" r="4" fill="#8b5cf6" />
      <circle cx="270" cy="20" r="4" fill="#8b5cf6" />
      <circle cx="300" cy="40" r="4" fill="#8b5cf6" />

      {/* Gradient Definition */}
      <defs>
        <linearGradient id="purple-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

// Stock Chart Component
export const StockChart: React.FC<{ positive: boolean }> = ({ positive }) => {
  const color = positive ? "#10b981" : "#ef4444"

  return (
    <svg className="w-full h-full" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Stock Line */}
      <path
        d={
          positive
            ? "M0,30 L10,25 L20,35 L30,20 L40,15 L50,25 L60,10 L70,5 L80,15 L90,5 L100,10"
            : "M0,10 L10,15 L20,5 L30,20 L40,25 L50,15 L60,30 L70,35 L80,25 L90,35 L100,30"
        }
        stroke={color}
        strokeWidth="2"
        fill="none"
      />
    </svg>
  )
}

