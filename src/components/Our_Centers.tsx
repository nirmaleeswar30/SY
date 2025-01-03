import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Clock, Phone, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface CenterSchedule {
  city: string;
  time: string;
  contactPerson: string;
  phone: string;
}

const scheduleData: CenterSchedule[] = [
  { "city": "Chennai TNagar Main Center", "time": "Sunday at 10:00 AM", "contactPerson": "Mr Manivannan", "phone": "9789017692" },
  { "city": "Chennai Mylapore", "time": "Friday at 06:30 PM", "contactPerson": "Mr Manivannan", "phone": "9176207999 / 9789017692" },
  { "city": "Chennai Thiruvanmiyur", "time": "Saturday at 06:00 PM", "contactPerson": "Mrs Mathangi", "phone": "8056244110 / 9711606089" },
  { "city": "Chennai Thiruvanmiyur", "time": "Wednesday at 06:30 PM", "contactPerson": "Mr Unnikrishnan", "phone": "9344819723" },
  { "city": "Chennai Chrompet", "time": "Wednesday at 06:30 PM", "contactPerson": "Mrs Nandhini", "phone": "7395965485" },
  { "city": "Chennai Villivakkam", "time": "Sunday at 06:00 PM", "contactPerson": "Mr Venkatesh", "phone": "8825488244" },
  { "city": "Chennai Anna Nagar", "time": "Friday at 06:00 PM", "contactPerson": "Mrs Chithra", "phone": "9840923868" },
  { "city": "Chennai Velachery", "time": "Saturday at 05:00 PM", "contactPerson": "Mr Govindraj", "phone": "9677009035 / 9840260684" },
  { "city": "Chennai Virugambakkam", "time": "Saturday at 05:00 PM", "contactPerson": "Mrs Geetha", "phone": "9952976902" },
  { "city": "Chennai Chetpet", "time": "Saturday at 05:00 PM", "contactPerson": "Mrs Minati", "phone": "9841989697" },
  { "city": "Chennai Adyar", "time": "Saturday at 10:00 AM", "contactPerson": "Mrs Jayashri", "phone": "8056244110 / 9962825215" },
  { "city": "Chennai Virugambakkam", "time": "Saturday at 05:00 PM", "contactPerson": "Mrs Geetha", "phone": "9952976902" },
  { "city": "Chennai Thoraipakkam", "time": "Saturday at 05:00 PM", "contactPerson": "Mr Arun Chakravarthy", "phone": "9710135555" },
  { "city": "Chennai Ambattur", "time": "Saturday at 05:00 PM", "contactPerson": "Mrs Latha", "phone": "9176726242" },
  { "city": "Chennai Perumbakkam", "time": "Saturday at 05:00 PM", "contactPerson": "Priyanka", "phone": "7358759811" },
  { "city": "Chennai Perungalathur", "time": "Saturday at 06:00 PM", "contactPerson": "Mr Rajasekar", "phone": "9436921957" },
  { "city": "Chennai Valasaravakkam", "time": "Saturday at 05:00 PM", "contactPerson": "Mrs Visalakshi", "phone": "9360816226" },
  { "city": "Chennai Pattipulam", "time": "Sunday at 10:00 AM", "contactPerson": "Ms Ashika", "phone": "9384616142" },
  { "city": "Chengapattu", "time": "Saturday at 05:00 PM", "contactPerson": "Mrs Gajaladakmi", "phone": "9994513557" },
  { "city": "Arakkonam", "time": "Sunday at 10:00 AM", "contactPerson": "Mr Saravanan", "phone": "9884849976" },
  { "city": "Acharapakkam", "time": "Sunday at 05:00 PM", "contactPerson": "Mrs Jayachitra", "phone": "9994674564 / 9444006393" },
  { "city": "Kadamalaiputhur", "time": "Saturday at 05:30 PM", "contactPerson": "Mrs Kamatchi", "phone": "9994609428 / 9940923195" },
  { "city": "Perumbair Kandikai", "time": "Monday at 06:00 PM", "contactPerson": "Mrs Sivakami", "phone": "9444006393 / 9994674564" },
  { "city": "Puducherry", "time": "Saturday at 05:00 PM", "contactPerson": "Mrs Manimozhi", "phone": "950045774 / 9994770455" },
  { "city": "Puducherry", "time": "Saturday at 05:00 PM", "contactPerson": "Mr Kirubakaran", "phone": "9500044774 / 9123519408" },
  { "city": "Hosur", "time": "Saturday at 05:00 PM", "contactPerson": "Mrs Rajeshwari", "phone": "9488091610 / 7010384499" },
  { "city": "Erode", "time": "Sunday at 05:00 PM", "contactPerson": "Mrs Sakshi", "phone": "8072671588" },
  { "city": "Salem", "time": "Saturday at 05:00 PM", "contactPerson": "Mrs Anitha", "phone": "8610977186" },
  { "city": "Tirupur", "time": "Sunday at 10:30 PM", "contactPerson": "Mr Vivek", "phone": "7010947360" },
  { "city": "Udumalaipettai", "time": "Saturday at 05:00 PM", "contactPerson": "Mrs Chandra Sankara Gomathi", "phone": "8883798791 / 9487843884" },
  { "city": "Coimbatore", "time": "Sunday at 10:00 AM", "contactPerson": "Mr Ramachandran", "phone": "9843695577 / 8870520007" },
  { "city": "Coimbatore", "time": "Saturday at 06:00 PM", "contactPerson": "Mr Karthik Raj", "phone": "8248964679" },
  { "city": "Coimbatore", "time": "Sunday at 11:00 AM", "contactPerson": "Mr Kannapan", "phone": "8870520007 / 9080163104" },
  { "city": "Pollachi", "time": "Tuesday at 11:00 AM", "contactPerson": "Mrs Prathiba", "phone": "9159191094 / 9566605183" },
  { "city": "Theni", "time": "Sunday at 10:30 AM", "contactPerson": "Mr Muthuramlingam", "phone": "9840627934 / 7373760291 / 9442027772" },
  { "city": "Trichy", "time": "Sunday at 10:00 AM", "contactPerson": "Mr Kandeeban", "phone": "9884305010" },
  { "city": "Neyveli", "time": "Saturday at 06:00 PM", "contactPerson": "Mrs Nalini", "phone": "6381594021" },
  { "city": "Karaikudi", "time": "Sunday at 06:00 PM", "contactPerson": "Mrs Sakthi", "phone": "7708852566" },
  { "city": "Dindigul", "time": "Saturday at 05:00 PM", "contactPerson": "Mrs Manimegalai", "phone": "9894411036" },
  { "city": "Madurai", "time": "Saturday at 05:00 PM", "contactPerson": "Mr Murali", "phone": "9384188760 / 7598861436" },
  { "city": "Melur", "time": "Saturday at 06:00 PM", "contactPerson": "Mrs Jayashankari", "phone": "9842124150" },
  { "city": "Kovilpatti Vanaramutti", "time": "Sunday at 10:00 AM", "contactPerson": "Mr Rajasekar", "phone": "9436921957" }
];

const Our_CentersPage: React.FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDay, setSelectedDay] = useState<string>('all');

  const days = useMemo(() => {
    const uniqueDays = Array.from(new Set(scheduleData.map(item =>
      item.time.split(' at ')[0]
    )));
    return ['all', ...uniqueDays];
  }, []);

  const filteredData = useMemo(() => {
    return scheduleData.filter(item => {
      const matchesSearch =
        item.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.contactPerson.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDay = selectedDay === 'all' || item.time.includes(selectedDay);
      return matchesSearch && matchesDay;
    });
  }, [searchTerm, selectedDay]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-red-50 to-red-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <main>
        <div className="pt-10 pb-14">
          <motion.div
            className="max-w-6xl mx-auto mt-12 px-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="text-center mb-12"
              variants={itemVariants}
            >
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {t('centers.title')}
              </h1>
              <p className="text-lg text-gray-600">{t('centers.subtitle')}</p>
            </motion.div>

            <motion.div
              className="mb-8 space-y-4"
              variants={itemVariants}
            >
              {/* Search and Filter Section */}
              <div className="flex flex-col md:flex-row gap-4 justify-between">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <motion.input
                    type="text"
                    placeholder={t('centers.searchPlaceholder')}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    whileFocus={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>

                <div className="flex gap-2 overflow-x-auto pb-2">
                  {days.map((day) => (
                    <motion.button
                      key={day}
                      onClick={() => setSelectedDay(day)}
                      className={`px-4 py-2 rounded-lg whitespace-nowrap ${
                        selectedDay === day
                          ? 'bg-red-700 text-white'
                          : 'bg-white text-gray-700 hover:bg-red-50'
                      } transition-colors`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {t(`days.${day}`)}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
              <motion.table
                className="w-full"
                variants={containerVariants}
              >
                <thead>
                  <tr className="bg-gradient-to-r from-red-800 to-red-700">
                    <th className="p-4 text-left text-white font-bold"><MapPin className="inline-block mr-2" size={16} />{t('centers.location')}</th>
                    <th className="p-4 text-left text-white font-bold"><Clock className="inline-block mr-2" size={16} />{t('centers.time')}</th>
                    <th className="p-4 text-left text-white font-bold"><User className="inline-block mr-2" size={16} />{t('centers.contactPerson')}</th>
                    <th className="p-4 text-left text-white font-bold"><Phone className="inline-block mr-2" size={16} />{t('centers.phoneNumber')}</th>
                  </tr>
                </thead>
                <tbody>
                  <AnimatePresence>
                    {filteredData.map((row, index) => (
                      <motion.tr
                        key={index}
                        className="hover:bg-red-50 transition-colors"
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        whileHover={{ scale: 1.01, backgroundColor: '#FEF2F2' }}
                        transition={{ duration: 0.2 }}
                      >
                        <td className="p-4 text-gray-800 border-b">{t(`locations.${row.city.replace(/ /g, '_')}`)}</td>
                        <td className="p-4 text-gray-800 border-b"> {t(`times.${row.time.replace(/[ :]/g, '_').replace(/ /g, '_')}`)} </td>

                        <td className="p-4 text-gray-800 border-b">{t(`contactPersons.${row.contactPerson.replace(/ /g, '_')}`)} </td>
                        <td className="p-4 text-gray-800 border-b">
                          <motion.a
                            href={`tel:${row.phone}`}
                            className="text-red-600 hover:text-red-800"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {row.phone}
                          </motion.a>
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </motion.table>
            </div>
          </motion.div>
        </div>
      </main>
    </motion.div>
  );
};

export default Our_CentersPage;
