import { Phone, Truck, CheckCircle, Bird } from "lucide-react";

const announcements = [
  { icon: Bird, text: "Bulk Orders Welcome – Call Now!" },
  { icon: Phone, text: "+260 XXX XXX XXX" },
  { icon: Truck, text: "Delivery Across Zambia" },
  { icon: CheckCircle, text: "Quality Assured Poultry" },
];

const AnnouncementBar = () => {
  // Duplicate announcements for seamless infinite scroll
  const duplicatedAnnouncements = [...announcements, ...announcements];

  return (
    <div className="bg-announcement text-announcement-foreground overflow-hidden py-2">
      <div className="animate-scroll-left flex whitespace-nowrap">
        {duplicatedAnnouncements.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 mx-8 md:mx-12"
          >
            <item.icon className="h-4 w-4 flex-shrink-0" />
            <span className="text-sm font-medium">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBar;