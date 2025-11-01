"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const campaigns = [
  {
    id: 1,
    title: "Flames of Justice Big Sale",
    date: "December 7, 2019",
    description: "Flames of Justice organised a Big Sale powered by Mouth Wide Shut Bakery to raise funds for providing sanitary napkins to underprivileged girls in Lucknow. The event aimed to promote menstrual hygiene and dignity for all.",
    impact: "The fundraiser was a huge success, thanks to the generous contributions of parents and students of GD Goenka Public School, Lucknow. The collected funds enabled us to distribute sanitary pads to girls in need, helping reduce menstrual stigma and improve access to basic hygiene.",
    images: ["/campaigns/big-sale-1.jpg", "/campaigns/big-sale-2.jpg", "/campaigns/big-sale-3.jpg"]
  },
  {
    id: 2,
    title: "Economic Emancipation Campaign (Phase 1)",
    date: "October 2020", 
    description: "To help artisans affected by job loss and financial strain during the pandemic, Flames of Justice launched the Economic Emancipation Campaign. The initiative involved selling beautifully crafted mud diyas made by artisans from Chinhat, Lucknow, aiming to support their livelihood during Diwali.",
    impact: "The campaign brought light into the lives of many struggling artisans. Each diya sold represented not just a symbol of hope but also a step toward economic independence. The overwhelming response reaffirmed our belief in the power of collective compassion and community-driven support.",
    images: ["/campaigns/diya-1.jpg", "/campaigns/diya-2.jpg", "/campaigns/diya-3.jpg"]
  },
  {
    id: 3,
    title: "Economic Emancipation Campaign (Phase 2 – The Centre Candles Project)",
    date: "November–December 2020",
    description: "The second phase of the Economic Emancipation Campaign, The Centre Candles Project, was organised in collaboration with Sarthak Foundation. Families from Chinhat, Lucknow, produced candles to generate income amidst the pandemic.",
    impact: "The campaign empowered several underprivileged families and children supported by Sarthak Foundation. It not only provided financial relief but also helped restore dignity and self-sufficiency. We were grateful for the assistance provided by Sarthak foundation and aim to help others in the future.",
    images: ["/campaigns/candles-1.jpg", "/campaigns/candles-2.jpg", "/campaigns/candles-3.jpg"]
  },
  {
    id: 4,
    title: "Menstrual Pad Donation Drive with Inayat",
    date: "March 28, 2022",
    description: "In collaboration with NGO Inayat, Flames of Justice conducted a menstrual hygiene donation drive, collecting over 50 donations for sanitary pads. The team visited rural areas to educate women and girls about menstruation, hygiene management, and health awareness.",
    impact: "The campaign was met with warmth and enthusiasm. Women and girls participated actively, asking questions and sharing experiences. The drive not only provided essential supplies but also helped break taboos around menstruation, replacing negative stigma with confidence and knowledge.",
    images: ["/campaigns/inayat-1.jpg", "/campaigns/inayat-2.jpg", "/campaigns/inayat-3.jpg"]
  },
  {
    id: 5,
    title: "Menstrual Hygiene Awareness Sessions with Dr. Archana Mishra",
    date: "February 27, 2022",
    description: "Girl Up FOJ conducted two educational sessions on menstrual hygiene for students of grades 4–7, featuring gynaecologist Dr. Archana Mishra. The sessions aimed to promote understanding of female reproductive health, sensitivity, and open discussion on menstruation.",
    impact: "The students' transformation—from hesitation to curiosity—was heartwarming. Teachers and Dr. Mishra praised the initiative for creating a safe, informed, and inclusive space for young girls. The campaign sparked awareness and helped normalise conversations around periods in schools.",
    images: ["/campaigns/mishra-1.jpg", "/campaigns/mishra-2.jpg", "/campaigns/mishra-3.jpg"]
  },
  {
    id: 6,
    title: "Donation Drive with Missionaries of Charity",
    date: "September 15, 2022",
    description: "Flames of Justice organised a donation drive with the Missionaries of Charity, Sapru Marg, Lucknow. Members interacted with elderly residents and individuals with special needs, learning from their inspiring life stories.",
    impact: "The experience was deeply moving and educational. Students sang, applied mehendi, and shared moments of compassion, leaving everyone smiling. The campaign instilled in our volunteers values of empathy, gratitude, and respect for all generations.",
    images: ["/campaigns/charity-1.jpg", "/campaigns/charity-2.jpg", "/campaigns/charity-3.jpg"]
  },
  {
    id: 7,
    title: "Lucknow Jail Donation Drive",
    date: "November 5, 2022",
    description: "Girl Up FOJ members visited Lucknow District Jail to donate warm blankets to inmates for the winter. The initiative focused on supporting prisoners facing unjust conditions or imprisonment for petty offences.",
    impact: "The visit shed light on prison rehabilitation and human rights. Volunteers interacted compassionately with inmates, understanding their struggles and hopes. The drive reinforced the importance of empathy, justice, and social reintegration over punishment.",
    images: ["/campaigns/jail-1.jpg", "/campaigns/jail-2.jpg", "/campaigns/jail-3.jpg"]
  },
  {
    id: 8,
    title: "Session with Female Support Staff (in collaboration with Prithvi Innovations)",
    date: "April 2023",
    description: "Girl Up FOJ organised an interactive session for the school's female support staff (Ayas) in collaboration with Prithvi Innovations. The session focused on hygiene, self-care, and empowerment for women in service roles.",
    impact: "We are deeply grateful to Ms. Anuradha Gupta from Prithvi Innovations for her collaboration. The session was met with enthusiasm, laughter, and heartfelt participation, creating a sense of unity, appreciation, and awareness among the attendees.",
    images: ["/campaigns/staff-1.jpg", "/campaigns/staff-2.jpg", "/campaigns/staff-3.jpg"]
  },
  {
    id: 9,
    title: "Menstrual Hygiene Campaign with Project Qadira",
    date: "October 31, 2023",
    description: "In collaboration with Project Qadira, Girl Up FOJ conducted a menstrual hygiene awareness campaign for girls aged 11–17 at a school on the outskirts of Lucknow. The session focused on puberty, hygiene, and confidence-building.",
    impact: "The event concluded with the distribution of biodegradable menstrual care kits by Project Qadira. The campaign's success was recognised by Girl Up India, acknowledging our team's effort in breaking taboos and empowering young girls through education and awareness.",
    images: ["/campaigns/qadira-1.jpg", "/campaigns/qadira-2.jpg", "/campaigns/qadira-3.jpg"]
  },
  {
    id: 10,
    title: "Food Distribution Drive with Ehsaas",
    date: "January 1, 2024",
    description: "Flames of Justice was invited by Ehsaas, a Lucknow-based non-profit, to participate in a food distribution drive for underprivileged communities. Volunteers came together on New Year's Day to spread kindness and care.",
    impact: "The smiles and gratitude of the recipients made this initiative truly heartwarming. It reminded us that every small act of service counts. We are grateful to Ehsaas for this opportunity to begin the year with compassion and purpose.",
    images: ["/campaigns/ehsaas-1.jpg", "/campaigns/ehsaas-2.jpg", "/campaigns/ehsaas-3.jpg"]
  },
  {
    id: 11,
    title: "Visit to Jeev Aashraya Veterinary Hospital",
    date: "May 4, 2024",
    description: "Expanding our humanitarian reach, Flames of Justice organised a visit to Jeev Aashraya Veterinary Hospital, Lucknow. Students learned about animal welfare, compassion, and the vital role of shelters in protecting voiceless beings.",
    impact: "The visit fostered empathy and awareness about animal rights among students. Observing rescued animals and understanding their care inspired a commitment toward kindness and responsible coexistence with all living beings.",
    images: ["/campaigns/vet-1.jpg", "/campaigns/vet-2.jpg", "/campaigns/vet-3.jpg"]
  },
  {
    id: 12,
    title: "Christmas Donation Drive",
    date: "December 25, 2024",
    description: "During Christmas 2024, Flames of Justice held a clothes donation drive to bring warmth to underprivileged communities. The initiative encouraged students and families to contribute clothes and spread the festive spirit through acts of kindness.",
    impact: "The heartfelt response from contributors truly reflected the real joy of Christmas, giving selflessly and spreading happiness. Through this drive, our community came together to make the season brighter for those in need, reminding us that compassion is the greatest gift of all.",
    images: ["/campaigns/christmas-1.jpg", "/campaigns/christmas-2.jpg", "/campaigns/christmas-3.jpg"]
  }
];

export default function OurWork() {
  const [selectedCampaign, setSelectedCampaign] = useState<typeof campaigns[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (campaign: typeof campaigns[0]) => {
    setSelectedCampaign(campaign);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedCampaign(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedCampaign) {
      setCurrentImageIndex((prev) => 
        prev === selectedCampaign.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedCampaign) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedCampaign.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-rose-50 to-pink-50" id="work">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-rose-800">Our Work</h2>
          <p className="text-lg text-rose-700 max-w-2xl mx-auto">
            Discover the impactful campaigns and initiatives we've undertaken to empower women and support our community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign, index) => (
            <motion.div
              key={campaign.id}
              className="bg-white rounded-2xl shadow-lg border border-rose-200 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              onClick={() => openGallery(campaign)}
            >
              <div className="h-48 bg-gradient-to-r from-rose-400 to-pink-400 relative overflow-hidden">
                {campaign.images[0] && (
                  <img
                    src={campaign.images[0]}
                    alt={campaign.title}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              </div>
              
              <div className="p-6">
                <div className="text-sm text-rose-600 font-semibold mb-2">{campaign.date}</div>
                <h3 className="text-xl font-bold text-rose-800 mb-3 line-clamp-2">{campaign.title}</h3>
                <p className="text-rose-700 text-sm leading-relaxed line-clamp-3">{campaign.description}</p>
                <button className="mt-4 text-rose-600 hover:text-rose-700 font-semibold text-sm">
                  View Gallery →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Gallery Modal */}
        {selectedCampaign && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-rose-200">
                <div>
                  <h3 className="text-xl font-bold text-rose-800">{selectedCampaign.title}</h3>
                  <p className="text-rose-600 text-sm">{selectedCampaign.date}</p>
                </div>
                <button
                  onClick={closeGallery}
                  className="text-rose-600 hover:text-rose-700 p-2 rounded-full hover:bg-rose-50 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Image Carousel */}
              <div className="relative">
                <img
                  src={selectedCampaign.images[currentImageIndex]}
                  alt={`${selectedCampaign.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-96 object-cover"
                />
                
                {selectedCampaign.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-rose-600 p-2 rounded-full transition-all"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-rose-600 p-2 rounded-full transition-all"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
                
                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {selectedCampaign.images.length}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 max-h-64 overflow-y-auto">
                <div className="mb-4">
                  <h4 className="font-semibold text-rose-800 mb-2">About</h4>
                  <p className="text-rose-700 text-sm leading-relaxed">{selectedCampaign.description}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-rose-800 mb-2">Impact</h4>
                  <p className="text-rose-700 text-sm leading-relaxed">{selectedCampaign.impact}</p>
                </div>
              </div>

              {/* Thumbnails */}
              {selectedCampaign.images.length > 1 && (
                <div className="p-4 border-t border-rose-200">
                  <div className="flex gap-2 overflow-x-auto">
                    {selectedCampaign.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 ${
                          index === currentImageIndex ? 'border-rose-500' : 'border-transparent'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}