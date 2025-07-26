"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Users, 
  FileText, 
  Activity, 
  Heart, 
  Stethoscope, 
  Pill, 
  Clock, 
  TrendingUp,
  Bell,
  Search,
  Settings,
  Menu,
  X,
  Plus,
  Filter,
  Download,
  Eye,
  Edit,
  Trash2,
  User,
  Phone,
  Mail,
  MapPin,
  Calendar as CalendarIcon,
  ChevronRight,
  Star,
  Award,
  Shield,
  Zap,
  BarChart3,
  Upload
} from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

// Define Patient type based on recentPatients structure
type Patient = {
  id: string;
  name: string;
  age: string;
  department: string;
  status: string;
  priority: string;
};

const HospitalHISShowcase = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [notifications] = useState(5);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring" as const,
        stiffness: 400
      }
    }
  };

  // Mock data
  const stats = [
    { title: 'ผู้ป่วยวันนี้', value: '247', icon: Users, color: 'text-blue-600', bgColor: 'bg-blue-100' },
    { title: 'นัดหมายรอ', value: '38', icon: Calendar, color: 'text-green-600', bgColor: 'bg-green-100' },
    { title: 'แพทย์เวร', value: '12', icon: Stethoscope, color: 'text-purple-600', bgColor: 'bg-purple-100' },
    { title: 'เตียงว่าง', value: '18', icon: Activity, color: 'text-orange-600', bgColor: 'bg-orange-100' }
  ];

  const recentPatients = [
    { id: '001', name: 'สมชาย ใจดี', age: '45', department: 'อายุรกรรม', status: 'รักษาอยู่', priority: 'สูง' },
    { id: '002', name: 'สมใส รักเรียน', age: '28', department: 'สูติกรรม', status: 'จำหน่าย', priority: 'ปกติ' },
    { id: '003', name: 'วิชาญ เก่งมาก', age: '67', department: 'หัวใจ', status: 'รักษาอยู่', priority: 'วิกฤต' },
    { id: '004', name: 'นงลักษณ์ สวยดี', age: '34', department: 'ผิวหนัง', status: 'นัดหมาย', priority: 'ปกติ' },
    { id: '005', name: 'กิตติ ขยันดี', age: '52', department: 'ออร์โธปิดิกส์', status: 'รักษาอยู่', priority: 'สูง' }
  ];

  const appointments = [
    { time: '09:00', patient: 'อรัญ ศิลป์ดี', doctor: 'นพ.สมศักดิ์', department: 'อายุรกรรม' },
    { time: '09:30', patient: 'วิไล ใจงาม', doctor: 'นพ.วิชัย', department: 'สูติกรรม' },
    { time: '10:00', patient: 'บุญธรรม รักดี', doctor: 'นพ.ประสิทธิ์', department: 'หัวใจ' },
    { time: '10:30', patient: 'มาลี สุขใจ', doctor: 'นพ.สุรพล', department: 'ผิวหนัง' }
  ];

  const menuItems = [
    { id: 'dashboard', label: 'แดชบอร์ด', icon: BarChart3 },
    { id: 'patients', label: 'ผู้ป่วย', icon: Users },
    { id: 'appointments', label: 'นัดหมาย', icon: Calendar },
    { id: 'doctors', label: 'แพทย์', icon: Stethoscope },
    { id: 'pharmacy', label: 'ร้านยา', icon: Pill },
    { id: 'reports', label: 'รายงาน', icon: FileText },
    { id: 'settings', label: 'ตั้งค่า', icon: Settings }
  ];

  const PatientDetailModal = ({ patient, isOpen, onClose }: { patient: Patient | null; isOpen: boolean; onClose: () => void }) => (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            ข้อมูลผู้ป่วย: {patient?.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">ข้อมูลส่วนบุคคล</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-gray-500" />
                  <span>ชื่อ: {patient?.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4 text-gray-500" />
                  <span>อายุ: {patient?.age} ปี</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <span>โทรศัพท์: 081-234-5678</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <span>อีเมล: patient@email.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span>ที่อยู่: 123 ถ.รัชดาภิเษก กรุงเทพฯ</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">สถานะปัจจุบัน</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge className={`mb-2 ${
                  patient?.priority === 'วิกฤต' ? 'bg-red-100 text-red-800' :
                  patient?.priority === 'สูง' ? 'bg-orange-100 text-orange-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {patient?.priority}
                </Badge>
                <p className="text-sm text-gray-600">แผนก: {patient?.department}</p>
                <p className="text-sm text-gray-600">สถานะ: {patient?.status}</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">ประวัติการรักษา</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="border-l-2 border-blue-200 pl-3">
                    <p className="font-medium">การตรวจครั้งที่ 1</p>
                    <p className="text-sm text-gray-600">วันที่: 15 ก.ค. 2567</p>
                    <p className="text-sm">อาการ: ปวดหัว, ไข้</p>
                  </div>
                  <div className="border-l-2 border-green-200 pl-3">
                    <p className="font-medium">การตรวจครั้งที่ 2</p>
                    <p className="text-sm text-gray-600">วันที่: 20 ก.ค. 2567</p>
                    <p className="text-sm">อาการ: ตรวจติดตาม</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">ยาที่กำลังใช้</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Paracetamol 500mg</span>
                    <Badge variant="outline">3 ครั้ง/วัน</Badge>
                  </li>
                  <li className="flex justify-between">
                    <span>Amoxicillin 250mg</span>
                    <Badge variant="outline">2 ครั้ง/วัน</Badge>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  const DashboardContent = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div key={index} variants={cardVariants} whileHover="hover">
            <Card className="relative overflow-hidden">
              <div className={`absolute inset-0 ${stat.bgColor} opacity-10`} />
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-full ${stat.bgColor}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                สถิติผู้ป่วย 7 วันที่ผ่านมา
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-end justify-between gap-2">
                {[120, 140, 110, 180, 160, 200, 190].map((height, i) => (
                  <motion.div
                    key={i}
                    className="bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-lg flex-1"
                    initial={{ height: 0 }}
                    animate={{ height: `${(height / 200) * 100}%` }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                {['จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส', 'อา'].map(day => (
                  <span key={day}>{day}</span>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                กิจกรรมล่าสุด
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { action: 'ผู้ป่วยใหม่เข้ารับการรักษา', time: '5 นาทีที่แล้ว', type: 'new' },
                  { action: 'การนัดหมายถูกยืนยัน', time: '10 นาทีที่แล้ว', type: 'confirmed' },
                  { action: 'รายงานผลตรวจเสร็จสิ้น', time: '15 นาทีที่แล้ว', type: 'report' },
                  { action: 'ผู้ป่วยจำหน่ายออก', time: '20 นาทีที่แล้ว', type: 'discharge' }
                ].map((activity, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className={`w-2 h-2 rounded-full ${
                      activity.type === 'new' ? 'bg-green-500' :
                      activity.type === 'confirmed' ? 'bg-blue-500' :
                      activity.type === 'report' ? 'bg-orange-500' :
                      'bg-purple-500'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              การดำเนินการด่วน
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'เพิ่มผู้ป่วยใหม่', icon: Plus, color: 'bg-blue-500' },
                { label: 'นัดหมายด่วน', icon: Calendar, color: 'bg-green-500' },
                { label: 'ตรวจสอบยา', icon: Pill, color: 'bg-purple-500' },
                { label: 'รายงานฉุกเฉิน', icon: FileText, color: 'bg-red-500' }
              ].map((action, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    className="w-full h-24 flex flex-col gap-2 hover:shadow-lg transition-all"
                  >
                    <div className={`p-2 rounded-full ${action.color} text-white`}>
                      <action.icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs">{action.label}</span>
                  </Button>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );

  const PatientsContent = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl font-bold">จัดการผู้ป่วย</h2>
        <div className="flex gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input placeholder="ค้นหาผู้ป่วย..." className="pl-10" />
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            เพิ่มผู้ป่วย
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>รายชื่อผู้ป่วย</CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                กรอง
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                ส่งออก
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>รหัสผู้ป่วย</TableHead>
                <TableHead>ชื่อ-นามสกุล</TableHead>
                <TableHead>อายุ</TableHead>
                <TableHead>แผนก</TableHead>
                <TableHead>สถานะ</TableHead>
                <TableHead>ระดับความสำคัญ</TableHead>
                <TableHead>การดำเนินการ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentPatients.map((patient, index) => (
                <motion.tr
                  key={patient.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="hover:bg-gray-50"
                >
                  <TableCell className="font-medium">{patient.id}</TableCell>
                  <TableCell>{patient.name}</TableCell>
                  <TableCell>{patient.age}</TableCell>
                  <TableCell>{patient.department}</TableCell>
                  <TableCell>
                    <Badge className={
                      patient.status === 'รักษาอยู่' ? 'bg-blue-100 text-blue-800' :
                      patient.status === 'จำหน่าย' ? 'bg-green-100 text-green-800' :
                      'bg-orange-100 text-orange-800'
                    }>
                      {patient.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={
                      patient.priority === 'วิกฤต' ? 'bg-red-100 text-red-800' :
                      patient.priority === 'สูง' ? 'bg-orange-100 text-orange-800' :
                      'bg-green-100 text-green-800'
                    }>
                      {patient.priority}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => setSelectedPatient(patient)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </motion.tr>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <PatientDetailModal 
        patient={selectedPatient}
        isOpen={!!selectedPatient}
        onClose={() => setSelectedPatient(null)}
      />
    </motion.div>
  );

  const AppointmentsContent = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">การนัดหมาย</h2>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          เพิ่มนัดหมาย
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>นัดหมายวันนี้</CardTitle>
              <CardDescription>วันที่ 26 กรกฎาคม 2567</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {appointments.map((appointment, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">{appointment.time}</div>
                      </div>
                      <div>
                        <p className="font-medium">{appointment.patient}</p>
                        <p className="text-sm text-gray-600">{appointment.doctor}</p>
                        <Badge variant="outline" className="mt-1">
                          {appointment.department}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        ยืนยัน
                      </Button>
                      <Button variant="outline" size="sm">
                        เลื่อน
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                เวลาทำการ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>จันทร์-ศุกร์</span>
                  <span>08:00-17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>เสาร์</span>
                  <span>08:00-12:00</span>
                </div>
                <div className="flex justify-between">
                  <span>อาทิตย์</span>
                  <span>ฉุกเฉินเท่านั้น</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>สถิติการนัดหมาย</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">ปฏิบัติตามนัด</span>
                    <span className="text-sm">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">ยกเลิกนัด</span>
                    <span className="text-sm">10%</span>
                  </div>
                  <Progress value={10} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">ไม่มานัด</span>
                    <span className="text-sm">5%</span>
                  </div>
                  <Progress value={5} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-white shadow-lg border-b"
      >
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"
              >
                <Heart className="h-8 w-8 text-white" />
              </motion.div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Hospital Information System
                </h1>
                <p className="text-sm text-gray-600">ระบบสารสนเทศโรงพยาบาล</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-5 w-5" />
                {notifications > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                  >
                    {notifications}
                  </motion.span>
                )}
              </Button>
              
              <Avatar>
                <AvatarImage src="/api/placeholder/32/32" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              
              <Button 
                variant="ghost" 
                size="sm"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="flex">
        {/* Sidebar */}
        <motion.aside
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          className={`${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
          } fixed md:relative z-30 w-64 h-screen bg-white shadow-xl transition-transform duration-300 ease-in-out`}
        >
          <div className="p-6">
            <nav className="space-y-2">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                  {activeTab === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="ml-auto"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </nav>

            <Separator className="my-6" />

            <div className="space-y-4">
              <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-full">
                      <Shield className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-green-800">ระบบปลอดภัย</p>
                      <p className="text-xs text-green-600">ข้อมูลได้รับการป้องกัน</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-orange-100 rounded-full">
                      <Award className="h-4 w-4 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-orange-800">มาตรฐาน ISO</p>
                      <p className="text-xs text-orange-600">รับรองคุณภาพ</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.aside>

        {/* Mobile overlay */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'dashboard' && <DashboardContent key="dashboard" />}
            {activeTab === 'patients' && <PatientsContent key="patients" />}
            {activeTab === 'appointments' && <AppointmentsContent key="appointments" />}
            {activeTab === 'doctors' && <DoctorsContent key="doctors" />}
            {activeTab === 'pharmacy' && <PharmacyContent key="pharmacy" />}
            {activeTab === 'reports' && <ReportsContent key="reports" />}
            {activeTab === 'settings' && <SettingsContent key="settings" />}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );

  // Additional Content Components
  function DoctorsContent() {
    const doctors = [
      { id: '001', name: 'นพ.สมศักดิ์ ใจดี', specialty: 'อายุรกรรม', status: 'เวร', patients: 15, rating: 4.9 },
      { id: '002', name: 'นพ.วิชัย รักษาดี', specialty: 'สูติกรรม', status: 'ว่าง', patients: 8, rating: 4.8 },
      { id: '003', name: 'นพ.ประสิทธิ์ หัวใจดี', specialty: 'หัวใจ', status: 'เวร', patients: 12, rating: 4.7 },
      { id: '004', name: 'นพ.สุรพล ผิวงาม', specialty: 'ผิวหนัง', status: 'พักเบรก', patients: 5, rating: 4.6 }
    ];

    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">จัดการแพทย์</h2>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            เพิ่มแพทย์
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <Avatar className="w-20 h-20 mx-auto">
                      <AvatarImage src={`/api/placeholder/80/80`} />
                      <AvatarFallback className="text-lg font-bold">
                        {doctor.name.split('.')[1]?.charAt(0) || 'D'}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div>
                      <h3 className="font-bold text-lg">{doctor.name}</h3>
                      <p className="text-gray-600">{doctor.specialty}</p>
                    </div>

                    <div className="flex items-center justify-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{doctor.rating}</span>
                    </div>

                    <div className="space-y-2">
                      <Badge className={
                        doctor.status === 'เวร' ? 'bg-green-100 text-green-800' :
                        doctor.status === 'ว่าง' ? 'bg-blue-100 text-blue-800' :
                        'bg-orange-100 text-orange-800'
                      }>
                        {doctor.status}
                      </Badge>
                      
                      <p className="text-sm text-gray-600">
                        ผู้ป่วย: {doctor.patients} คน
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="h-4 w-4 mr-1" />
                        ดู
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Edit className="h-4 w-4 mr-1" />
                        แก้ไข
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>ตารางเวรแพทย์</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-2 text-center">
              {['จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์', 'อาทิตย์'].map((day) => (
                <div key={day} className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-sm mb-2">{day}</h4>
                  <div className="space-y-1">
                    <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      นพ.สมศักดิ์
                    </div>
                    <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                      นพ.วิชัย
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  function PharmacyContent() {
    const medications = [
      { id: '001', name: 'Paracetamol 500mg', stock: 150, minStock: 50, category: 'ยาบรรเทาปวด', expiry: '2025-12-31' },
      { id: '002', name: 'Amoxicillin 250mg', stock: 25, minStock: 30, category: 'ยาปฏิชีวนะ', expiry: '2025-08-15' },
      { id: '003', name: 'Ibuprofen 400mg', stock: 80, minStock: 40, category: 'ยาบรรเทาปวด', expiry: '2026-01-20' },
      { id: '004', name: 'Omeprazole 20mg', stock: 60, minStock: 25, category: 'ยารักษากรด', expiry: '2025-10-10' }
    ];

    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">จัดการร้านยา</h2>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              รายงานคงคลัง
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              เพิ่มยา
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">ยาทั้งหมด</p>
                  <p className="text-3xl font-bold">1,247</p>
                </div>
                <div className="p-3 rounded-full bg-blue-100">
                  <Pill className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">ยาใกล้หมด</p>
                  <p className="text-3xl font-bold text-orange-600">8</p>
                </div>
                <div className="p-3 rounded-full bg-orange-100">
                  <Pill className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">ยาหมดอายุ</p>
                  <p className="text-3xl font-bold text-red-600">3</p>
                </div>
                <div className="p-3 rounded-full bg-red-100">
                  <Pill className="h-6 w-6 text-red-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>รายการยา</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>รหัสยา</TableHead>
                  <TableHead>ชื่อยา</TableHead>
                  <TableHead>หมวดหมู่</TableHead>
                  <TableHead>คงเหลือ</TableHead>
                  <TableHead>สถานะ</TableHead>
                  <TableHead>วันหมดอายุ</TableHead>
                  <TableHead>การดำเนินการ</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {medications.map((med, index) => (
                  <motion.tr
                    key={med.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <TableCell className="font-medium">{med.id}</TableCell>
                    <TableCell>{med.name}</TableCell>
                    <TableCell>{med.category}</TableCell>
                    <TableCell>{med.stock}</TableCell>
                    <TableCell>
                      <Badge className={
                        med.stock < med.minStock ? 'bg-red-100 text-red-800' :
                        med.stock < med.minStock * 1.5 ? 'bg-orange-100 text-orange-800' :
                        'bg-green-100 text-green-800'
                      }>
                        {med.stock < med.minStock ? 'ใกล้หมด' :
                         med.stock < med.minStock * 1.5 ? 'น้อย' : 'ปกติ'}
                      </Badge>
                    </TableCell>
                    <TableCell>{med.expiry}</TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  function ReportsContent() {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">รายงาน</h2>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            ส่งออกรายงาน
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'รายงานผู้ป่วยรายวัน', desc: 'สถิติผู้ป่วยประจำวัน', icon: Users, color: 'blue' },
            { title: 'รายงานการเงิน', desc: 'รายรับ-รายจ่าย', icon: BarChart3, color: 'green' },
            { title: 'รายงานยา', desc: 'สถิติการใช้ยา', icon: Pill, color: 'purple' },
            { title: 'รายงานแพทย์', desc: 'ประสิทธิภาพแพทย์', icon: Stethoscope, color: 'orange' },
            { title: 'รายงานคุณภาพ', desc: 'มาตรฐานการรักษา', icon: Award, color: 'red' },
            { title: 'รายงานอุปกรณ์', desc: 'สถานะเครื่องมือ', icon: Activity, color: 'teal' }
          ].map((report, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              transition={{ delay: index * 0.1 }}
            >
              <Card className="cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-full bg-${report.color}-100`}>
                      <report.icon className={`h-6 w-6 text-${report.color}-600`} />
                    </div>
                    <div>
                      <h3 className="font-bold">{report.title}</h3>
                      <p className="text-sm text-gray-600">{report.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>รายงานยอดนิยม</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: 'รายงานผู้ป่วยรายเดือน', downloads: 1250 },
                  { name: 'รายงานการเงินรายไตรมาส', downloads: 980 },
                  { name: 'รายงานคุณภาพการรักษา', downloads: 756 },
                  { name: 'รายงานประสิทธิภาพแพทย์', downloads: 654 }
                ].map((report, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-sm">{report.name}</span>
                    <Badge variant="outline">{report.downloads} ครั้ง</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>การสร้างรายงานใหม่</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="report-type">ประเภทรายงาน</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="เลือกประเภทรายงาน" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="patient">รายงานผู้ป่วย</SelectItem>
                      <SelectItem value="financial">รายงานการเงิน</SelectItem>
                      <SelectItem value="medication">รายงานยา</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="date-range">ช่วงวันที่</Label>
                  <div className="flex gap-2">
                    <Input type="date" />
                    <Input type="date" />
                  </div>
                </div>
                
                <Button className="w-full">
                  สร้างรายงาน
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    );
  }

  function SettingsContent() {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        <h2 className="text-2xl font-bold">ตั้งค่าระบบ</h2>

        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="general">ทั่วไป</TabsTrigger>
            <TabsTrigger value="users">ผู้ใช้งาน</TabsTrigger>
            <TabsTrigger value="security">ความปลอดภัย</TabsTrigger>
            <TabsTrigger value="backup">สำรองข้อมูล</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>การตั้งค่าทั่วไป</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="hospital-name">ชื่อโรงพยาบาล</Label>
                    <Input id="hospital-name" defaultValue="โรงพยาบาลตัวอย่าง" />
                  </div>
                  <div>
                    <Label htmlFor="hospital-code">รหัสโรงพยาบาล</Label>
                    <Input id="hospital-code" defaultValue="HOS001" />
                  </div>
                  <div>
                    <Label htmlFor="timezone">เขตเวลา</Label>
                    <Select defaultValue="asia-bangkok">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asia-bangkok">Asia/Bangkok</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="language">ภาษา</Label>
                    <Select defaultValue="th">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="th">ไทย</SelectItem>
                        <SelectItem value="en">English</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>จัดการผู้ใช้งาน</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <Input placeholder="ค้นหาผู้ใช้..." className="max-w-sm" />
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    เพิ่มผู้ใช้
                  </Button>
                </div>
                
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ชื่อผู้ใช้</TableHead>
                      <TableHead>อีเมล</TableHead>
                      <TableHead>บทบาท</TableHead>
                      <TableHead>สถานะ</TableHead>
                      <TableHead>การดำเนินการ</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { name: 'admin', email: 'admin@hospital.com', role: 'ผู้ดูแลระบบ', status: 'ใช้งาน' },
                      { name: 'doctor1', email: 'doctor1@hospital.com', role: 'แพทย์', status: 'ใช้งาน' },
                      { name: 'nurse1', email: 'nurse1@hospital.com', role: 'พยาบาล', status: 'ระงับ' }
                    ].map((user, i) => (
                      <TableRow key={i}>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.role}</TableCell>
                        <TableCell>
                          <Badge className={user.status === 'ใช้งาน' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>การตั้งค่าความปลอดภัย</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">การยืนยันตัวตนแบบ 2 ขั้นตอน</h4>
                    <p className="text-sm text-gray-600">เพิ่มความปลอดภัยด้วย OTP</p>
                  </div>
                  <input type="checkbox" className="rounded" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">บันทึกการเข้าสู่ระบบ</h4>
                    <p className="text-sm text-gray-600">บันทึกประวัติการเข้าใช้งาน</p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">การแจ้งเตือนความปลอดภัย</h4>
                    <p className="text-sm text-gray-600">แจ้งเตือนเมื่อมีการเข้าถึงผิดปกติ</p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="backup" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>การสำรองข้อมูล</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">การสำรองอัตโนมัติ</h4>
                    <Select defaultValue="daily">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">รายวัน</SelectItem>
                        <SelectItem value="weekly">รายสัปดาห์</SelectItem>
                        <SelectItem value="monthly">รายเดือน</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">ตำแหน่งสำรอง</h4>
                    <Select defaultValue="local">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="local">เครื่องเซิร์ฟเวอร์</SelectItem>
                        <SelectItem value="cloud">คลาวด์</SelectItem>
                        <SelectItem value="external">ฮาร์ดดิสก์ภายนอก</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Button>
                    <Download className="h-4 w-4 mr-2" />
                    สร้างสำรองข้อมูล
                  </Button>
                  <Button variant="outline">
                    <Upload className="h-4 w-4 mr-2" />
                    กู้คืนข้อมูล
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    );
  }
}

export default HospitalHISShowcase;