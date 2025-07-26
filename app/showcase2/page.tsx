'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Bell, 
  Search, 
  User, 
  Settings, 
  Home, 
  Calendar, 
  Users, 
  FileText, 
  Activity,
  ChevronDown,
  ChevronRight,
  Star,
  Heart,
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  Edit,
  Trash2,
  Plus,
  Check,
  X,
  AlertCircle,
  Info,
  CheckCircle,
  XCircle,
  Loader2,
  Eye,
  EyeOff,
  Menu,
  Filter,
  Download,
  Upload
} from 'lucide-react'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

// Mock data
const patients = [
  { id: '001', name: 'นายสมชาย ใจดี', age: 45, department: 'Internal Medicine', status: 'active' },
  { id: '002', name: 'นางสาวมาลี สวยงาม', age: 28, department: 'Pediatrics', status: 'waiting' },
  { id: '003', name: 'นายวิชัย มั่นคง', age: 62, department: 'Cardiology', status: 'completed' }
]

const appointments = [
  { time: '09:00', patient: 'นายสมชาย ใจดี', doctor: 'นพ.วิทยา', type: 'ตรวจทั่วไป' },
  { time: '10:30', patient: 'นางสาวมาลี สวยงาม', doctor: 'นพ.สุดา', type: 'ตรวจครรภ์' },
  { time: '14:00', patient: 'นายวิชัย มั่นคง', doctor: 'นพ.ประยุทธ', type: 'ตรวจหัวใจ' }
]

export default function ShowcasePage() {
  // States for interactive components
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  const [accordionOpen, setAccordionOpen] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [selectValue, setSelectValue] = useState('')
  const [checkboxes, setCheckboxes] = useState({ option1: false, option2: true })
  const [radio, setRadio] = useState('option1')
  const [switchOn, setSwitchOn] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [showPopover, setShowPopover] = useState(false)
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [loginForm, setLoginForm] = useState({ username: '', password: '' })
  const [progress, setProgress] = useState(65)
  const [showToast, setShowToast] = useState(false)

  // Component showcase sections
  const showcaseSections = [
    {
      id: 'layout',
      title: '1. Layout & Navigation',
      icon: <Menu className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'forms',
      title: '2. Input & Form',
      icon: <Edit className="w-5 h-5" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'display',
      title: '3. Display',
      icon: <Eye className="w-5 h-5" />,
      color: 'from-purple-500 to-violet-500'
    },
    {
      id: 'actions',
      title: '4. Action & Feedback',
      icon: <Activity className="w-5 h-5" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'visualization',
      title: '5. Visualization',
      icon: <Calendar className="w-5 h-5" />,
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 'auth',
      title: '6. Authentication',
      icon: <User className="w-5 h-5" />,
      color: 'from-indigo-500 to-blue-500'
    }
  ]

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setShowToast(true)
      setTimeout(() => setShowToast(false), 3000)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-white shadow-sm border-b sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold text-gray-900">HIS Showcase</h1>
              </motion.div>
            </div>
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
              >
                <Bell className="w-5 h-5" />
              </motion.button>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center cursor-pointer"
              >
                <User className="w-4 h-4 text-white" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <motion.main 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      >
        {/* Page Title */}
        <motion.section variants={itemVariants} className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Hospital Information System
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Component Showcase สำหรับระบบบริหารจัดการโรงพยาบาล
            <br />
            ออกแบบด้วย Next.js, React, TailwindCSS, Shadcn UI และ Framer Motion
          </p>
        </motion.section>

        {/* Navigation Menu */}
        <motion.nav variants={itemVariants} className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {showcaseSections.map((section) => (
              <motion.a
                key={section.id}
                href={`#${section.id}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r ${section.color} text-white shadow-lg hover:shadow-xl transition-shadow`}
              >
                {section.icon}
                <span className="font-medium">{section.title}</span>
              </motion.a>
            ))}
          </div>
        </motion.nav>

        {/* Section 1: Layout & Navigation */}
        <motion.section id="layout" variants={itemVariants} className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                <Menu className="w-5 h-5 text-white" />
              </div>
              Layout & Navigation
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Sidebar */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Sidebar</h3>
                <div className="flex">
                  <motion.div 
                    initial={{ x: -100 }}
                    animate={{ x: sidebarOpen ? 0 : -100 }}
                    className="w-64 bg-gray-900 text-white rounded-lg p-4 space-y-2"
                  >
                    <div className="flex items-center space-x-2 p-2">
                      <Activity className="w-5 h-5" />
                      <span className="font-semibold">HIS Dashboard</span>
                    </div>
                    {[
                      { icon: Home, label: 'หน้าหลัก' },
                      { icon: Users, label: 'ผู้ป่วย' },
                      { icon: Calendar, label: 'นัดหมาย' },
                      { icon: FileText, label: 'รายงาน' },
                      { icon: Settings, label: 'ตั้งค่า' }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ x: 4 }}
                        className="flex items-center space-x-2 p-2 rounded hover:bg-gray-800 cursor-pointer"
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.label}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    {sidebarOpen ? 'ซ่อน' : 'แสดง'} Sidebar
                  </motion.button>
                </div>
              </div>

              {/* Tabs */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Tabs</h3>
                <div className="border rounded-lg p-4">
                  <div className="flex space-x-1 mb-4">
                    {['overview', 'patients', 'reports'].map((tab) => (
                      <motion.button
                        key={tab}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 rounded-lg font-medium ${
                          activeTab === tab
                            ? 'bg-blue-500 text-white'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {tab === 'overview' ? 'ภาพรวม' : tab === 'patients' ? 'ผู้ป่วย' : 'รายงาน'}
                      </motion.button>
                    ))}
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    {activeTab === 'overview' && <p>ข้อมูลภาพรวมของระบบ</p>}
                    {activeTab === 'patients' && <p>รายการผู้ป่วยทั้งหมด</p>}
                    {activeTab === 'reports' && <p>รายงานสถิติต่าง ๆ</p>}
                  </div>
                </div>
              </div>

              {/* Breadcrumb */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Breadcrumb</h3>
                <nav className="flex items-center space-x-2 text-sm text-gray-600">
                  <a href="#" className="hover:text-blue-500">หน้าหลัก</a>
                  <ChevronRight className="w-4 h-4" />
                  <a href="#" className="hover:text-blue-500">ผู้ป่วย</a>
                  <ChevronRight className="w-4 h-4" />
                  <span className="text-gray-900 font-medium">รายละเอียดผู้ป่วย</span>
                </nav>
              </div>

              {/* Accordion */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Accordion</h3>
                <div className="space-y-2">
                  {[
                    { id: 'info', title: 'ข้อมูลส่วนตัว', content: 'ชื่อ, เลขบัตรประชาชน, ที่อยู่' },
                    { id: 'medical', title: 'ประวัติการรักษา', content: 'การรักษาครั้งที่ผ่านมา' },
                    { id: 'insurance', title: 'ข้อมูลการประกัน', content: 'ประกันสังคม, ประกันสุขภาพ' }
                  ].map((item) => (
                    <div key={item.id} className="border rounded-lg">
                      <motion.button
                        whileHover={{ backgroundColor: '#f8fafc' }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setAccordionOpen(accordionOpen === item.id ? '' : item.id)}
                        className="w-full flex items-center justify-between p-4 text-left"
                      >
                        <span className="font-medium">{item.title}</span>
                        <motion.div
                          animate={{ rotate: accordionOpen === item.id ? 90 : 0 }}
                        >
                          <ChevronRight className="w-4 h-4" />
                        </motion.div>
                      </motion.button>
                      <motion.div
                        initial={false}
                        animate={{
                          height: accordionOpen === item.id ? 'auto' : 0,
                          opacity: accordionOpen === item.id ? 1 : 0
                        }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="p-4 pt-0 text-gray-600">
                          {item.content}
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 2: Input & Form */}
        <motion.section id="forms" variants={itemVariants} className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
                <Edit className="w-5 h-5 text-white" />
              </div>
              Input & Form
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Input & Textarea */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Input & Textarea</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ชื่อผู้ป่วย</label>
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="กรอกชื่อผู้ป่วย"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">อาการ</label>
                    <textarea
                      placeholder="อธิบายอาการ..."
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Select & Combobox */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Select</h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">แผนก</label>
                    <select
                      value={selectValue}
                      onChange={(e) => setSelectValue(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">เลือกแผนก</option>
                      <option value="internal">อายุรกรรม</option>
                      <option value="surgery">ศัลยกรรม</option>
                      <option value="pediatrics">กุมารเวชศาสตร์</option>
                      <option value="cardiology">โรคหัวใจ</option>
                    </select>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="ค้นหาแพทย์..."
                      className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Checkbox & Radio */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Checkbox & Radio</h3>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={checkboxes.option1}
                        onChange={(e) => setCheckboxes({...checkboxes, option1: e.target.checked})}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span>แพ้ยา</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={checkboxes.option2}
                        onChange={(e) => setCheckboxes({...checkboxes, option2: e.target.checked})}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span>โรคประจำตัว</span>
                    </label>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700">เพศ</p>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={radio === 'male'}
                        onChange={(e) => setRadio(e.target.value)}
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span>ชาย</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={radio === 'female'}
                        onChange={(e) => setRadio(e.target.value)}
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span>หญิง</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Switch */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Switch</h3>
                <div className="space-y-3">
                  <label className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">รับการแจ้งเตือน</span>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSwitchOn(!switchOn)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        switchOn ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <motion.span
                        animate={{ x: switchOn ? 20 : 2 }}
                        className="inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform"
                      />
                    </motion.button>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 3: Display */}
        <motion.section id="display" variants={itemVariants} className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg flex items-center justify-center mr-3">
                <Eye className="w-5 h-5 text-white" />
              </div>
              Display
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Cards */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Cards</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 rounded-lg text-white"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-blue-100">ผู้ป่วยวันนี้</p>
                        <p className="text-2xl font-bold">124</p>
                      </div>
                      <Users className="w-8 h-8 text-blue-200" />
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-r from-green-500 to-emerald-500 p-6 rounded-lg text-white"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-green-100">นัดหมายวันนี้</p>
                        <p className="text-2xl font-bold">48</p>
                      </div>
                      <Calendar className="w-8 h-8 text-green-200" />
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Table */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Table</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">ชื่อ</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">แผนก</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">สถานะ</th>
                      </tr>
                    </thead>
                    <tbody>
                      {patients.map((patient, index) => (
                        <motion.tr
                          key={patient.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="border-t hover:bg-gray-50"
                        >
                          <td className="px-4 py-2 text-sm">{patient.name}</td>
                          <td className="px-4 py-2 text-sm">{patient.department}</td>
                          <td className="px-4 py-2">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              patient.status === 'active' ? 'bg-green-100 text-green-800' :
                              patient.status === 'waiting' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {patient.status === 'active' ? 'กำลังรักษา' :
                               patient.status === 'waiting' ? 'รอคิว' : 'เสร็จสิ้น'}
                            </span>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Badges & Progress */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Badges & Progress</h3>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">ปกติ</span>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">เฝ้าระวัง</span>
                    <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">ฉุกเฉิน</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">หายแล้ว</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>ความคืบหน้าการรักษา</span>
                      <span>{progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="bg-blue-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal & Popover */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Modal & Popover</h3>
                <div className="space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowModal(true)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    เปิด Modal
                  </motion.button>
                  <div className="relative">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setShowPopover(!showPopover)}
                      className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
                    >
                      แสดง Popover
                    </motion.button>
                    {showPopover && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute top-full mt-2 left-0 bg-white border rounded-lg shadow-lg p-4 w-64 z-10"
                      >
                        <h4 className="font-medium mb-2">ข้อมูลเพิ่มเติม</h4>
                        <p className="text-sm text-gray-600">
                          นี่คือตัวอย่าง Popover ที่แสดงข้อมูลเพิ่มเติม
                        </p>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal */}
            {showModal && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                onClick={() => setShowModal(false)}
              >
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-white rounded-lg p-6 max-w-md w-full mx-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">ข้อมูลผู้ป่วย</h3>
                    <button
                      onClick={() => setShowModal(false)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">ชื่อ-นามสกุล</label>
                      <p className="text-sm text-gray-900">นายสมชาย ใจดี</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">อายุ</label>
                      <p className="text-sm text-gray-900">45 ปี</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">แผนก</label>
                      <p className="text-sm text-gray-900">อายุรกรรม</p>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2 mt-6">
                    <button
                      onClick={() => setShowModal(false)}
                      className="px-4 py-2 text-gray-600 border rounded-lg hover:bg-gray-50"
                    >
                      ปิด
                    </button>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                      บันทึก
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </div>
        </motion.section>

        {/* Section 4: Action & Feedback */}
        <motion.section id="actions" variants={itemVariants} className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-3">
                <Activity className="w-5 h-5 text-white" />
              </div>
              Action & Feedback
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Buttons */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Buttons</h3>
                <div className="grid grid-cols-2 gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center justify-center space-x-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>เพิ่ม</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center justify-center space-x-2"
                  >
                    <Check className="w-4 h-4" />
                    <span>บันทึก</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 flex items-center justify-center space-x-2"
                  >
                    <Edit className="w-4 h-4" />
                    <span>แก้ไข</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 flex items-center justify-center space-x-2"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>ลบ</span>
                  </motion.button>
                </div>
              </div>

              {/* Alerts */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Alerts</h3>
                <div className="space-y-3">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center space-x-2 p-3 bg-blue-50 border border-blue-200 rounded-lg"
                  >
                    <Info className="w-5 h-5 text-blue-500" />
                    <span className="text-blue-800 text-sm">ข้อมูลทั่วไป: ระบบทำงานปกติ</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center space-x-2 p-3 bg-green-50 border border-green-200 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-green-800 text-sm">สำเร็จ: บันทึกข้อมูลเรียบร้อย</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center space-x-2 p-3 bg-yellow-50 border border-yellow-200 rounded-lg"
                  >
                    <AlertCircle className="w-5 h-5 text-yellow-500" />
                    <span className="text-yellow-800 text-sm">คำเตือน: ตรวจสอบข้อมูลอีกครั้ง</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center space-x-2 p-3 bg-red-50 border border-red-200 rounded-lg"
                  >
                    <XCircle className="w-5 h-5 text-red-500" />
                    <span className="text-red-800 text-sm">ข้อผิดพลาด: ไม่สามารถเชื่อมต่อได้</span>
                  </motion.div>
                </div>
              </div>

              {/* Loading & Spinner */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Loading & Spinner</h3>
                <div className="space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setLoading(true);
                      setTimeout(() => setLoading(false), 2000);
                    }}
                    disabled={loading}
                    className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
                      loading 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-blue-500 hover:bg-blue-600'
                    } text-white`}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>กำลังโหลด...</span>
                      </>
                    ) : (
                      <span>เริ่มโหลด</span>
                    )}
                  </motion.button>
                  <div className="flex items-center space-x-4">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-6 h-6 border-3 border-blue-500 border-t-transparent rounded-full"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-2 h-2 bg-blue-500 rounded-full"
                    />
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="w-2 h-2 bg-green-500 rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Toast */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Toast</h3>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setShowToast(true);
                    setTimeout(() => setShowToast(false), 3000);
                  }}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                >
                  แสดง Toast
                </motion.button>
              </div>
            </div>

            {/* Toast Notification */}
            {showToast && (
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50 flex items-center space-x-2"
              >
                <CheckCircle className="w-5 h-5" />
                <span>บันทึกข้อมูลสำเร็จ!</span>
                <button
                  onClick={() => setShowToast(false)}
                  className="ml-2 text-green-200 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </motion.div>
            )}
          </div>
        </motion.section>

        {/* Section 5: Visualization */}
        <motion.section id="visualization" variants={itemVariants} className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mr-3">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              Visualization
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Chart */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Chart / Graph</h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-4">จำนวนผู้ป่วยรายเดือน</h4>
                  <div className="flex items-end space-x-2 h-32">
                    {[65, 45, 78, 92, 56, 89, 73].map((height, index) => (
                      <motion.div
                        key={index}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="bg-blue-500 rounded-t flex-1 min-h-[20px]"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>ม.ค.</span>
                    <span>ก.พ.</span>
                    <span>มี.ค.</span>
                    <span>เม.ย.</span>
                    <span>พ.ค.</span>
                    <span>มิ.ย.</span>
                    <span>ก.ค.</span>
                  </div>
                </div>
              </div>

              {/* Calendar */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Calendar</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-medium">กรกฎาคม 2025</h4>
                    <div className="flex space-x-1">
                      <button className="p-1 hover:bg-gray-200 rounded">
                        <ChevronRight className="w-4 h-4 rotate-180" />
                      </button>
                      <button className="p-1 hover:bg-gray-200 rounded">
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center text-xs">
                    {(['อ', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'] as string[]).map((day: string, idx: number) => (
                      <div key={day + idx} className="p-2 font-medium text-gray-600">
                        {day}
                      </div>
                    ))}
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((date) => (
                      <motion.div
                        key={date}
                        whileHover={{ scale: 1.1 }}
                        className={`p-2 rounded cursor-pointer ${
                          date === 26 
                            ? 'bg-blue-500 text-white' 
                            : date % 7 === 0 
                            ? 'text-red-500 hover:bg-red-50' 
                            : 'hover:bg-gray-200'
                        }`}
                      >
                        {date}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-4 lg:col-span-2">
                <h3 className="text-lg font-semibold">Timeline</h3>
                <div className="space-y-4">
                  {appointments.map((appointment, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="w-16 text-sm font-medium text-gray-600">
                        {appointment.time}
                      </div>
                      <div className="w-4 h-4 bg-blue-500 rounded-full flex-shrink-0" />
                      <div className="flex-1">
                        <p className="font-medium">{appointment.patient}</p>
                        <p className="text-sm text-gray-600">
                          {appointment.doctor} - {appointment.type}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 text-blue-500 hover:bg-blue-50 rounded"
                        >
                          <Edit className="w-4 h-4" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 text-red-500 hover:bg-red-50 rounded"
                        >
                          <Trash2 className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 6: Authentication */}
        <motion.section id="auth" variants={itemVariants} className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                <User className="w-5 h-5 text-white" />
              </div>
              Authentication
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Login Form */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Login Form</h3>
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  onSubmit={handleLogin}
                  className="space-y-4 bg-gray-50 p-6 rounded-lg"
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ชื่อผู้ใช้
                    </label>
                    <input
                      type="text"
                      value={loginForm.username}
                      onChange={(e) => setLoginForm({...loginForm, username: e.target.value})}
                      placeholder="กรอกชื่อผู้ใช้"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      รหัสผ่าน
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={loginForm.password}
                        onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                        placeholder="กรอกรหัสผ่าน"
                        className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                      <span className="text-sm text-gray-600">จดจำการเข้าสู่ระบบ</span>
                    </label>
                    <a href="#" className="text-sm text-blue-500 hover:text-blue-700">
                      ลืมรหัสผ่าน?
                    </a>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={loading}
                    className={`w-full py-2 rounded-lg font-medium ${
                      loading
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-500 hover:bg-blue-600'
                    } text-white flex items-center justify-center space-x-2`}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>กำลังเข้าสู่ระบบ...</span>
                      </>
                    ) : (
                      <span>เข้าสู่ระบบ</span>
                    )}
                  </motion.button>
                </motion.form>
              </div>

              {/* User Avatar & Profile */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">User Avatar & Profile</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center space-x-4 mb-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold cursor-pointer"
                    >
                      Dr
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-gray-900">นพ.สมชาย วิชาการ</h4>
                      <p className="text-sm text-gray-600">แพทย์อายุรกรรม</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span className="text-xs text-green-600">ออนไลน์</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Mail className="w-4 h-4" />
                      <span>somchai.doctor@hospital.com</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span>081-234-5678</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>แผนกอายุรกรรม ชั้น 3</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 mt-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm"
                    >
                      แก้ไขโปรไฟล์
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm"
                    >
                      ออกจากระบบ
                    </motion.button>
                  </div>
                </div>

                {/* Additional User Actions */}
                <div className="grid grid-cols-2 gap-3">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg text-white cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-green-100 text-sm">ผู้ป่วยวันนี้</p>
                        <p className="text-xl font-bold">24</p>
                      </div>
                      <Users className="w-6 h-6 text-green-200" />
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg text-white cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-orange-100 text-sm">นัดหมาย</p>
                        <p className="text-xl font-bold">8</p>
                      </div>
                      <Calendar className="w-6 h-6 text-orange-200" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer variants={itemVariants} className="text-center py-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Hospital Information System - Component Showcase
            </h3>
            <p className="text-gray-600 mb-4">
              ระบบบริหารจัดการโรงพยาบาลที่ทันสมัย ใช้งานง่าย และปลอดภัย
            </p>
            <div className="flex justify-center space-x-4 text-sm text-gray-500">
              <span>© 2025 HIS Development Team</span>
              <span>•</span>
              <span>Built with Next.js, React & TailwindCSS</span>
              <span>•</span>
              <span>Enhanced with Framer Motion</span>
            </div>
            
            {/* Tech Stack Icons */}
            <div className="flex justify-center space-x-6 mt-6">
              {[
                { name: 'Next.js', color: 'from-black to-gray-800' },
                { name: 'React', color: 'from-blue-400 to-blue-600' },
                { name: 'Tailwind', color: 'from-cyan-400 to-blue-500' },
                { name: 'Framer', color: 'from-pink-500 to-violet-500' }
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-full flex items-center justify-center text-white text-xs font-bold cursor-pointer shadow-lg`}
                  title={tech.name}
                >
                  {tech.name.slice(0, 2)}
                </motion.div>
              ))}
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-blue-500">50+</div>
                <div className="text-sm text-gray-600">Components</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-green-500">6</div>
                <div className="text-sm text-gray-600">Categories</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-purple-500">100%</div>
                <div className="text-sm text-gray-600">Responsive</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-orange-500">Modern</div>
                <div className="text-sm text-gray-600">Design</div>
              </motion.div>
            </div>
          </div>
        </motion.footer>
      </motion.main>
      
      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg flex items-center justify-center z-40 hover:shadow-xl"
      >
        <ChevronRight className="w-6 h-6 -rotate-90" />
      </motion.button>
      
      {/* Background Decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-green-400/10 to-cyan-400/10 rounded-full"
        />
      </div>
    </div>
  )
}