import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { ScrollArea } from '@/components/ui/scroll-area';
import services from "@/data/services";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Syllabus</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">Wide range of topics that provide solutions for modern enterprise challenges</p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(services).map(([key, service]) => (
              <Card key={key} className="cursor-pointer">
                <Drawer>
                  <DrawerTrigger asChild>
                    <CardHeader>
                      <service.icon className="h-8 w-8 text-[#FFC000] mb-2" />
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle>{service.title}</DrawerTitle>
                    </DrawerHeader>
                    <ScrollArea className="p-4 max-h-[60vh] overflow-auto">
                      <div className="px-4 py-6">
                        <ul className="list-disc pl-5 space-y-2">
                          {service.courses.map((course, index) => (
                            <li key={index}>{course}</li>
                          ))}
                        </ul>
                        <DrawerClose asChild>
                          <Button variant="outline" className="mt-4">Close</Button>
                        </DrawerClose>
                      </div>
                    </ScrollArea>
                  </DrawerContent>
                </Drawer>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}