"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Table } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, User, Bed, Stethoscope, HeartPulse, AlertCircle, CheckCircle, Hospital, Syringe, Clock, Users, MapPin } from "lucide-react";

export default function HospitalShowcasePage() {
  // State สำหรับ interactive
  const [bedStatus, setBedStatus] = useState({
    total: 20,
    occupied: 15,
  });
  const [appointments, setAppointments] = useState([
    { id: 1, patient: "สมชาย ใจดี", doctor: "นพ. วิชัย", time: "09:00", status: "รอพบแพทย์" },
    { id: 2, patient: "สมหญิง สายใจ", doctor: "นพ. วิชัย", time: "09:30", status: "เสร็จสิ้น" },
    { id: 3, patient: "John Smith", doctor: "นพ. สุชาติ", time: "10:00", status: "รอพบแพทย์" },
  ]);
  const [showAlert, setShowAlert] = useState(false);

  // คำนวณเปอร์เซ็นต์เตียงว่าง
  const bedPercent = ((bedStatus.total - bedStatus.occupied) / bedStatus.total) * 100;

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <motion.h1
            className="text-4xl font-bold text-blue-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hospital UI Components Showcase
          </motion.h1>
          <motion.p
            className="text-lg text-slate-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            ตัวอย่างการใช้งาน UI Components สำหรับระบบโรงพยาบาล พร้อม interactive และ responsive layout
          </motion.p>
        </div>

        {/* Card Variants Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-blue-800">Card Variants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Doctor Card */}
            <Card className="shadow-md">
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/api/placeholder/48/48" />
                  <AvatarFallback className="bg-blue-200 text-blue-900 font-bold">วช</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Stethoscope className="h-5 w-5 text-blue-500" />นพ. วิชัย
                  </CardTitle>
                  <span className="text-xs text-slate-500">อายุรกรรม</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Users className="h-4 w-4" /> คนไข้ 120 ราย
                </div>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="secondary">ดูโปรไฟล์</Button>
              </CardFooter>
            </Card>
            {/* Patient Card */}
            <Card className="shadow-md">
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/api/placeholder/48/48" />
                  <AvatarFallback className="bg-green-200 text-green-900 font-bold">สม</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <User className="h-5 w-5 text-green-500" />สมชาย ใจดี
                  </CardTitle>
                  <span className="text-xs text-slate-500">ผู้ป่วยใน</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <HeartPulse className="h-4 w-4" /> โรคหัวใจ
                </div>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="outline">ดูประวัติ</Button>
              </CardFooter>
            </Card>
            {/* Room Card */}
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Hospital className="h-5 w-5 text-purple-500" />ห้อง 301
                </CardTitle>
                <span className="text-xs text-slate-500">แผนกศัลยกรรม</span>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm">
                  <Bed className="h-4 w-4 text-slate-400" /> เตียงว่าง: 1/4
                </div>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="secondary">จองห้อง</Button>
              </CardFooter>
            </Card>
            {/* Bed Status Card */}
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bed className="h-5 w-5 text-pink-500" />สถานะเตียง
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-2 text-sm text-slate-600">เตียงว่าง {bedStatus.total - bedStatus.occupied} / {bedStatus.total}</div>
                <Progress value={bedPercent} className="w-full" />
              </CardContent>
              <CardFooter>
                <Badge variant={bedPercent < 30 ? "destructive" : "secondary"}>
                  {bedPercent < 30 ? "ใกล้เต็ม" : "ว่างเพียงพอ"}
                </Badge>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Appointments Table Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-blue-800">ตารางนัดหมาย</h2>
          <div className="overflow-x-auto">
            <Table className="min-w-[500px]">
              <thead>
                <tr className="bg-blue-100">
                  <th>เวลา</th>
                  <th>ผู้ป่วย</th>
                  <th>แพทย์</th>
                  <th>สถานะ</th>
                  <th>การจัดการ</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((a) => (
                  <tr key={a.id} className="border-b">
                    <td>{a.time}</td>
                    <td>{a.patient}</td>
                    <td>{a.doctor}</td>
                    <td>
                      <Badge variant={a.status === "เสร็จสิ้น" ? "secondary" : "secondary"}>{a.status}</Badge>
                    </td>
                    <td>
                      {a.status !== "เสร็จสิ้น" && (
                        <Button size="sm" onClick={() => setAppointments(appts => appts.map(ap => ap.id === a.id ? { ...ap, status: "เสร็จสิ้น" } : ap))}>
                          ยืนยันเสร็จสิ้น
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </section>

        {/* Bed Status & Alert Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-blue-800">สถานะเตียงและแจ้งเตือน</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Bed Progress Card */}
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bed className="h-5 w-5 text-pink-500" />สรุปเตียงทั้งหมด
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-2 text-sm text-slate-600">{bedStatus.occupied} เตียงถูกใช้งาน</div>
                <Progress value={bedPercent} className="w-full" />
              </CardContent>
              <CardFooter>
                <Button size="sm" onClick={() => setBedStatus(bs => ({ ...bs, occupied: Math.max(0, bs.occupied - 1) }))}>
                  ปล่อยเตียง
                </Button>
              </CardFooter>
            </Card>
            {/* Alert Card */}
            <Card className="shadow-md border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-600">
                  <AlertCircle className="h-5 w-5" />แจ้งเตือน
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-slate-700">พบผู้ป่วยฉุกเฉินเข้ารับการรักษา</div>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="destructive" onClick={() => setShowAlert(false)}>
                  รับทราบ
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Dashboard Summary Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-blue-800">แดชบอร์ดสรุป</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="shadow-sm">
              <CardContent className="flex flex-col items-center py-6">
                <Stethoscope className="h-8 w-8 text-blue-500 mb-2" />
                <div className="text-2xl font-bold">12</div>
                <div className="text-xs text-slate-500">แพทย์</div>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="flex flex-col items-center py-6">
                <User className="h-8 w-8 text-green-500 mb-2" />
                <div className="text-2xl font-bold">48</div>
                <div className="text-xs text-slate-500">ผู้ป่วยในระบบ</div>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="flex flex-col items-center py-6">
                <Bed className="h-8 w-8 text-pink-500 mb-2" />
                <div className="text-2xl font-bold">{bedStatus.total - bedStatus.occupied}</div>
                <div className="text-xs text-slate-500">เตียงว่าง</div>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="flex flex-col items-center py-6">
                <Calendar className="h-8 w-8 text-purple-500 mb-2" />
                <div className="text-2xl font-bold">7</div>
                <div className="text-xs text-slate-500">นัดหมายวันนี้</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Usage Guidelines Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-800">Usage Guidelines</h2>
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle>แนวทางการใช้ Components</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2 text-slate-700 text-sm">
                <li>ใช้ <b>Card</b> สำหรับแสดงข้อมูลสำคัญ เช่น หมอ, คนไข้, ห้อง, เตียง</li>
                <li>ใช้ <b>Badge</b> สำหรับแสดงสถานะ เช่น สถานะนัดหมาย, สถานะเตียง</li>
                <li>ใช้ <b>Progress</b> สำหรับแสดงเปอร์เซ็นต์ เช่น เตียงว่าง</li>
                <li>ใช้ <b>Table</b> สำหรับข้อมูลตาราง เช่น ตารางนัดหมาย</li>
                <li>ใช้ <b>Button</b> สำหรับ action ต่าง ๆ เช่น ยืนยัน, จอง, รับทราบ</li>
                <li>รองรับ responsive ด้วย grid และ flex</li>
                <li>เพิ่ม interactive state เพื่อประสบการณ์ผู้ใช้ที่ดีขึ้น</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
} 