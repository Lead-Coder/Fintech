"use client"

import { useState } from "react"
import { LineChart, BarChart, PieChart, DonutChart, StockChart } from "../components/charts"
import {
  CreditCard,
  ShoppingCart,
  Bell,
  Settings,
  User,
  Search,
  Home,
  Briefcase,
  TrendingUp,
  DollarSign,
  BarChart2,
  PieChart as PieChartIcon,
  Activity,
  Menu,
  X,
  LogOut,
  HelpCircle,
  ShoppingBag,
  Heart,
  Clock,
} from "../components/icons"

export default function Dashboard() {
  const [activeSidebar, setActiveSidebar] = useState<string | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = (id: string) => {
    if (activeSidebar === id) {
      setActiveSidebar(null)
    } else {
      setActiveSidebar(id)
      setSidebarOpen(true)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center">
            <button
              className="md:hidden p-2 mr-2 rounded-full hover:bg-gray-100"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <div className="flex items-center">
              <div className="bg-blue-600 text-white p-2 rounded-lg mr-2">
                <TrendingUp className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold text-blue-600">FinTrack</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6 text-gray-600">
            <a href="#" className="hover:text-blue-600 transition-colors">
              Dashboard
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Analytics
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Investments
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Transactions
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <div className="relative">
              <button
                className="p-2 rounded-full hover:bg-gray-100 relative"
                onClick={() => toggleSidebar("notifications")}
              >
                <Bell className="h-5 w-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
            </div>
            <div className="relative">
              <button className="p-2 rounded-full hover:bg-gray-100 relative" onClick={() => toggleSidebar("cart")}>
                <ShoppingCart className="h-5 w-5 text-gray-600" />
                <span className="absolute top-0 right-0 bg-blue-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  3
                </span>
              </button>
            </div>
            <button
              className="flex items-center space-x-2 p-1 rounded-full hover:bg-gray-100"
              onClick={() => toggleSidebar("profile")}
            >
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white font-medium">
                JD
              </div>
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar - Navigation */}
        <aside
          className={`bg-white border-r border-gray-200 w-16 md:w-64 flex-shrink-0 ${sidebarOpen ? "block" : "hidden"} md:block`}
        >
          <div className="h-full flex flex-col">
            <div className="p-4 md:p-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <nav className="flex-1 px-2 space-y-1">
              <a href="#" className="flex items-center space-x-3 px-3 py-3 rounded-lg bg-blue-50 text-blue-700">
                <Home className="h-5 w-5" />
                <span className="hidden md:inline-block font-medium">Dashboard</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-700 hover:bg-gray-100">
                <BarChart2 className="h-5 w-5" />
                <span className="hidden md:inline-block">Analytics</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-700 hover:bg-gray-100">
                <Briefcase className="h-5 w-5" />
                <span className="hidden md:inline-block">Investments</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-700 hover:bg-gray-100">
                <CreditCard className="h-5 w-5" />
                <span className="hidden md:inline-block">Transactions</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-700 hover:bg-gray-100">
                <PieChartIcon className="h-5 w-5" />
                <span className="hidden md:inline-block">Budget</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-700 hover:bg-gray-100">
                <Activity className="h-5 w-5" />
                <span className="hidden md:inline-block">Reports</span>
              </a>
            </nav>

            <div className="p-4 border-t border-gray-200">
              <a href="#" className="flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-700 hover:bg-gray-100">
                <Settings className="h-5 w-5" />
                <span className="hidden md:inline-block">Settings</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-700 hover:bg-gray-100">
                <HelpCircle className="h-5 w-5" />
                <span className="hidden md:inline-block">Help Center</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-700 hover:bg-gray-100">
                <LogOut className="h-5 w-5" />
                <span className="hidden md:inline-block">Log Out</span>
              </a>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Financial Dashboard</h1>
            <p className="text-gray-600">Welcome back, John! Here's your financial overview.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-500 text-sm font-medium">Total Balance</h3>
                <div className="bg-blue-100 p-2 rounded-lg">
                  <DollarSign className="h-5 w-5 text-blue-600" />
                </div>
              </div>
              <div className="flex items-end space-x-1">
                <p className="text-2xl font-bold text-gray-900">$24,562.00</p>
                <span className="text-green-500 text-sm font-medium">+2.5%</span>
              </div>
              <p className="text-gray-500 text-sm mt-1">Updated 2 hours ago</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-500 text-sm font-medium">Monthly Income</h3>
                <div className="bg-green-100 p-2 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                </div>
              </div>
              <div className="flex items-end space-x-1">
                <p className="text-2xl font-bold text-gray-900">$8,350.00</p>
                <span className="text-green-500 text-sm font-medium">+4.3%</span>
              </div>
              <p className="text-gray-500 text-sm mt-1">Compared to last month</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-500 text-sm font-medium">Monthly Expenses</h3>
                <div className="bg-red-100 p-2 rounded-lg">
                  <Activity className="h-5 w-5 text-red-600" />
                </div>
              </div>
              <div className="flex items-end space-x-1">
                <p className="text-2xl font-bold text-gray-900">$5,240.00</p>
                <span className="text-red-500 text-sm font-medium">+1.8%</span>
              </div>
              <p className="text-gray-500 text-sm mt-1">Compared to last month</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-500 text-sm font-medium">Savings Rate</h3>
                <div className="bg-purple-100 p-2 rounded-lg">
                  <PieChartIcon className="h-5 w-5 text-purple-600" />
                </div>
              </div>
              <div className="flex items-end space-x-1">
                <p className="text-2xl font-bold text-gray-900">37.2%</p>
                <span className="text-green-500 text-sm font-medium">+2.1%</span>
              </div>
              <p className="text-gray-500 text-sm mt-1">Of total income</p>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-gray-900">Income & Expenses</h3>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-lg">Monthly</button>
                  <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">Yearly</button>
                </div>
              </div>
              <div className="h-64">
                <BarChart />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-gray-900">Portfolio Performance</h3>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-lg">1M</button>
                  <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">3M</button>
                  <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">1Y</button>
                  <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">All</button>
                </div>
              </div>
              <div className="h-64">
                <LineChart />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-gray-900">Expense Breakdown</h3>
                <button className="text-sm text-blue-600 hover:text-blue-800">View All</button>
              </div>
              <div className="h-64">
                <DonutChart />
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                    <span className="text-sm text-gray-600">Housing</span>
                  </div>
                  <span className="text-sm font-medium">32%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm text-gray-600">Food</span>
                  </div>
                  <span className="text-sm font-medium">21%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                    <span className="text-sm text-gray-600">Transportation</span>
                  </div>
                  <span className="text-sm font-medium">16%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    <span className="text-sm text-gray-600">Entertainment</span>
                  </div>
                  <span className="text-sm font-medium">14%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <span className="text-sm text-gray-600">Others</span>
                  </div>
                  <span className="text-sm font-medium">17%</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-gray-900">Investment Allocation</h3>
                <button className="text-sm text-blue-600 hover:text-blue-800">View All</button>
              </div>
              <div className="h-64">
                <PieChart />
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                    <span className="text-sm text-gray-600">Stocks</span>
                  </div>
                  <span className="text-sm font-medium">45%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm text-gray-600">Bonds</span>
                  </div>
                  <span className="text-sm font-medium">25%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                    <span className="text-sm text-gray-600">Real Estate</span>
                  </div>
                  <span className="text-sm font-medium">15%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    <span className="text-sm text-gray-600">Crypto</span>
                  </div>
                  <span className="text-sm font-medium">10%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <span className="text-sm text-gray-600">Cash</span>
                  </div>
                  <span className="text-sm font-medium">5%</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-gray-900">Recent Transactions</h3>
                <button className="text-sm text-blue-600 hover:text-blue-800">View All</button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <ShoppingBag className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">Amazon</h4>
                    <p className="text-xs text-gray-500">May 30, 2023 • Shopping</p>
                  </div>
                  <span className="text-red-600 font-medium">-$34.50</span>
                </div>

                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div className="bg-green-100 p-2 rounded-lg mr-3">
                    <DollarSign className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">Salary</h4>
                    <p className="text-xs text-gray-500">May 28, 2023 • Income</p>
                  </div>
                  <span className="text-green-600 font-medium">+$2,750.00</span>
                </div>

                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div className="bg-purple-100 p-2 rounded-lg mr-3">
                    <CreditCard className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">Netflix</h4>
                    <p className="text-xs text-gray-500">May 27, 2023 • Subscription</p>
                  </div>
                  <span className="text-red-600 font-medium">-$12.99</span>
                </div>

                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div className="bg-yellow-100 p-2 rounded-lg mr-3">
                    <ShoppingCart className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">Grocery Store</h4>
                    <p className="text-xs text-gray-500">May 26, 2023 • Food</p>
                  </div>
                  <span className="text-red-600 font-medium">-$65.75</span>
                </div>

                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div className="bg-red-100 p-2 rounded-lg mr-3">
                    <Activity className="h-5 w-5 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">Electric Bill</h4>
                    <p className="text-xs text-gray-500">May 25, 2023 • Utilities</p>
                  </div>
                  <span className="text-red-600 font-medium">-$85.00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stock Watchlist */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 mb-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-gray-900">Stock Watchlist</h3>
              <button className="text-sm text-blue-600 hover:text-blue-800">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Symbol
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Company
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Change
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Market Cap
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Chart
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">AAPL</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Apple Inc.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$182.63</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        +1.25%
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$2.87T</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="w-24 h-12">
                        <StockChart positive={true} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">MSFT</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Microsoft Corp.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$335.40</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        +0.87%
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$2.49T</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="w-24 h-12">
                        <StockChart positive={true} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">GOOGL</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Alphabet Inc.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$125.23</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                        -0.32%
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$1.59T</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="w-24 h-12">
                        <StockChart positive={false} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">AMZN</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Amazon.com Inc.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$120.58</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        +1.05%
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$1.24T</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="w-24 h-12">
                        <StockChart positive={true} />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">TSLA</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Tesla Inc.</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$193.17</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                        -0.78%
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$612.8B</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="w-24 h-12">
                        <StockChart positive={false} />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>

        {/* Right Sidebars */}
        <div
          className={`fixed inset-y-0 right-0 transform ${activeSidebar ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-40`}
        >
          {/* Products Sidebar */}
          {activeSidebar === "products" && (
            <div className="h-full w-80 bg-white shadow-xl flex flex-col">
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Financial Products</h2>
                <button className="p-2 rounded-full hover:bg-gray-100" onClick={() => setActiveSidebar(null)}>
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <input
                      type="text"
                      placeholder="Search products..."
                      className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-blue-800">Premium Checking</h3>
                      <span className="bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-full">Popular</span>
                    </div>
                    <p className="text-sm text-blue-700 mb-3">High-yield checking account with premium benefits</p>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-800 font-bold">1.5% APY</span>
                      <button className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm">Learn More</button>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl">
                    <h3 className="font-medium text-gray-800 mb-2">High-Yield Savings</h3>
                    <p className="text-sm text-gray-600 mb-3">Maximize your savings with competitive rates</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-800 font-bold">2.15% APY</span>
                      <button className="bg-gray-200 text-gray-800 px-3 py-1 rounded-lg text-sm hover:bg-gray-300">
                        Learn More
                      </button>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl">
                    <h3 className="font-medium text-gray-800 mb-2">Investment Portfolio</h3>
                    <p className="text-sm text-gray-600 mb-3">Professionally managed investment solutions</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-800 font-bold">7.2% Avg Return</span>
                      <button className="bg-gray-200 text-gray-800 px-3 py-1 rounded-lg text-sm hover:bg-gray-300">
                        Learn More
                      </button>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl">
                    <h3 className="font-medium text-gray-800 mb-2">Retirement Planning</h3>
                    <p className="text-sm text-gray-600 mb-3">Secure your future with our retirement plans</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-800 font-bold">Tax Advantaged</span>
                      <button className="bg-gray-200 text-gray-800 px-3 py-1 rounded-lg text-sm hover:bg-gray-300">
                        Learn More
                      </button>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl">
                    <h3 className="font-medium text-gray-800 mb-2">Premium Credit Card</h3>
                    <p className="text-sm text-gray-600 mb-3">Earn rewards on every purchase</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-800 font-bold">2% Cashback</span>
                      <button className="bg-gray-200 text-gray-800 px-3 py-1 rounded-lg text-sm hover:bg-gray-300">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-gray-200">
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Contact an Advisor
                </button>
              </div>
            </div>
          )}

          {/* Cart Sidebar */}
          {activeSidebar === "cart" && (
            <div className="h-full w-80 bg-white shadow-xl flex flex-col">
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Your Cart (3)</h2>
                <button className="p-2 rounded-full hover:bg-gray-100" onClick={() => setActiveSidebar(null)}>
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                <div className="space-y-4">
                  <div className="flex items-start p-3 bg-gray-50 rounded-lg">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3">
                      <Briefcase className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900">Premium Checking</h4>
                      <p className="text-xs text-gray-500">Annual fee: $120</p>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <X className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="flex items-start p-3 bg-gray-50 rounded-lg">
                    <div className="bg-green-100 p-2 rounded-lg mr-3">
                      <CreditCard className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900">Rewards Credit Card</h4>
                      <p className="text-xs text-gray-500">No annual fee</p>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <X className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="flex items-start p-3 bg-gray-50 rounded-lg">
                    <div className="bg-purple-100 p-2 rounded-lg mr-3">
                      <Activity className="h-5 w-5 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900">Investment Portfolio</h4>
                      <p className="text-xs text-gray-500">Management fee: 0.25%</p>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">$120.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Management Fees</span>
                    <span className="font-medium">0.25%</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 flex justify-between">
                    <span className="font-medium">Total</span>
                    <span className="font-bold">$120.00 + 0.25%</span>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-gray-200">
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors mb-2">
                  Checkout
                </button>
                <button className="w-full bg-white text-blue-600 border border-blue-600 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                  Save for Later
                </button>
              </div>
            </div>
          )}

          {/* Notifications Sidebar */}
          {activeSidebar === "notifications" && (
            <div className="h-full w-80 bg-white shadow-xl flex flex-col">
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Notifications</h2>
                <button className="p-2 rounded-full hover:bg-gray-100" onClick={() => setActiveSidebar(null)}>
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto">
                <div className="p-4 border-b border-gray-100 bg-blue-50">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <Bell className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">New Feature Available</h4>
                      <p className="text-xs text-gray-600 mt-1">
                        Try our new budget forecasting tool to predict future expenses.
                      </p>
                      <div className="flex items-center mt-2">
                        <Clock className="h-3 w-3 text-gray-400 mr-1" />
                        <span className="text-xs text-gray-400">Just now</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <DollarSign className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Deposit Received</h4>
                      <p className="text-xs text-gray-600 mt-1">
                        You received a deposit of $2,750.00 from Direct Deposit.
                      </p>
                      <div className="flex items-center mt-2">
                        <Clock className="h-3 w-3 text-gray-400 mr-1" />
                        <span className="text-xs text-gray-400">2 hours ago</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-start">
                    <div className="bg-yellow-100 p-2 rounded-full mr-3">
                      <Activity className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Unusual Activity</h4>
                      <p className="text-xs text-gray-600 mt-1">We detected a login from a new device. Was this you?</p>
                      <div className="flex items-center mt-2">
                        <Clock className="h-3 w-3 text-gray-400 mr-1" />
                        <span className="text-xs text-gray-400">Yesterday</span>
                      </div>
                      <div className="flex space-x-2 mt-2">
                        <button className="px-2 py-1 bg-blue-600 text-white text-xs rounded">Yes, it was me</button>
                        <button className="px-2 py-1 bg-red-600 text-white text-xs rounded">No, secure account</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-2 rounded-full mr-3">
                      <CreditCard className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Payment Due Soon</h4>
                      <p className="text-xs text-gray-600 mt-1">
                        Your credit card payment of $450.00 is due in 3 days.
                      </p>
                      <div className="flex items-center mt-2">
                        <Clock className="h-3 w-3 text-gray-400 mr-1" />
                        <span className="text-xs text-gray-400">2 days ago</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-start">
                    <div className="bg-red-100 p-2 rounded-full mr-3">
                      <TrendingUp className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Stock Alert</h4>
                      <p className="text-xs text-gray-600 mt-1">AAPL is up 3.5% today. Check your portfolio.</p>
                      <div className="flex items-center mt-2">
                        <Clock className="h-3 w-3 text-gray-400 mr-1" />
                        <span className="text-xs text-gray-400">3 days ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-gray-200">
                <button className="w-full text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                  Mark All as Read
                </button>
              </div>
            </div>
          )}

          {/* Profile Sidebar */}
          {activeSidebar === "profile" && (
            <div className="h-full w-80 bg-white shadow-xl flex flex-col">
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Your Profile</h2>
                <button className="p-2 rounded-full hover:bg-gray-100" onClick={() => setActiveSidebar(null)}>
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-6 border-b border-gray-200 flex flex-col items-center">
                <div className="h-20 w-20 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white text-2xl font-bold mb-4">
                  JD
                </div>
                <h3 className="text-xl font-bold">John Doe</h3>
                <p className="text-gray-600">john.doe@example.com</p>
                <button className="mt-4 text-sm text-blue-600 hover:text-blue-800">Edit Profile</button>
              </div>
              <div className="flex-1 overflow-y-auto">
                <div className="p-4 border-b border-gray-200">
                  <h4 className="text-sm font-medium text-gray-500 mb-3">ACCOUNT</h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="flex items-center text-gray-700 hover:text-blue-600">
                        <User className="h-4 w-4 mr-3" />
                        <span>Personal Information</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center text-gray-700 hover:text-blue-600">
                        <CreditCard className="h-4 w-4 mr-3" />
                        <span>Payment Methods</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center text-gray-700 hover:text-blue-600">
                        <Bell className="h-4 w-4 mr-3" />
                        <span>Notifications</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center text-gray-700 hover:text-blue-600">
                        <Settings className="h-4 w-4 mr-3" />
                        <span>Preferences</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="p-4 border-b border-gray-200">
                  <h4 className="text-sm font-medium text-gray-500 mb-3">FAVORITES</h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="flex items-center text-gray-700 hover:text-blue-600">
                        <Heart className="h-4 w-4 mr-3" />
                        <span>Saved Products</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center text-gray-700 hover:text-blue-600">
                        <Briefcase className="h-4 w-4 mr-3" />
                        <span>Watchlist</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="p-4">
                  <h4 className="text-sm font-medium text-gray-500 mb-3">SUPPORT</h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="flex items-center text-gray-700 hover:text-blue-600">
                        <HelpCircle className="h-4 w-4 mr-3" />
                        <span>Help Center</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center text-gray-700 hover:text-blue-600">
                        <Activity className="h-4 w-4 mr-3" />
                        <span>Report an Issue</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-4 border-t border-gray-200">
                <button className="w-full flex items-center justify-center text-red-600 py-2 rounded-lg hover:bg-red-50 transition-colors">
                  <LogOut className="h-4 w-4 mr-2" />
                  <span>Log Out</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar Buttons */}
        <div className="hidden lg:flex flex-col space-y-2 fixed right-4 top-1/2 transform -translate-y-1/2 z-20">
          <button
            className={`p-3 rounded-full shadow-md ${activeSidebar === "products" ? "bg-blue-600 text-white" : "bg-white text-gray-600 hover:bg-gray-100"}`}
            onClick={() => toggleSidebar("products")}
            title="Products"
          >
            <Briefcase className="h-5 w-5" />
          </button>
          <button
            className={`p-3 rounded-full shadow-md ${activeSidebar === "cart" ? "bg-blue-600 text-white" : "bg-white text-gray-600 hover:bg-gray-100"}`}
            onClick={() => toggleSidebar("cart")}
            title="Cart"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
          <button
            className={`p-3 rounded-full shadow-md ${activeSidebar === "notifications" ? "bg-blue-600 text-white" : "bg-white text-gray-600 hover:bg-gray-100"}`}
            onClick={() => toggleSidebar("notifications")}
            title="Notifications"
          >
            <Bell className="h-5 w-5" />
          </button>
          <button
            className={`p-3 rounded-full shadow-md ${activeSidebar === "profile" ? "bg-blue-600 text-white" : "bg-white text-gray-600 hover:bg-gray-100"}`}
            onClick={() => toggleSidebar("profile")}
            title="Profile"
          >
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

