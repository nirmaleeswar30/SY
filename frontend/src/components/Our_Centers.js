import React from 'react';

const scheduleData = [
    
        { "city": "Chennai - T.Nagar (Main Center)", "time": "Sunday at 10:00 AM", "contactPerson": "Mr. Manivannan", "phone": "9789017692" },
        { "city": "Chennai - Mylapore", "time": "Friday at 06:30 PM", "contactPerson": "Mr. Manivannan", "phone": "9176207999 / 9789017692" },
        { "city": "Chennai - Thiruvanmiyur", "time": "Saturday at 06:00 PM", "contactPerson": "Mrs. Mathangi", "phone": "8056244110 / 9711606089" },
        { "city": "Chennai - Thiruvanmiyur", "time": "Wednesday at 06:30 PM", "contactPerson": "Mr. Unnikrishnan", "phone": "9344819723" },
        { "city": "Chennai - Chrompet", "time": "Wednesday at 06:30 PM", "contactPerson": "Mrs. Nandhini", "phone": "7395965485" },
        { "city": "Chennai - Villivakkam", "time": "Sunday at 06:00 PM", "contactPerson": "Mr. Venkatesh", "phone": "8825488244" },
        { "city": "Chennai - Anna Nagar", "time": "Friday at 06:00 PM", "contactPerson": "Mrs. Chithra", "phone": "9840923868" },
        { "city": "Chennai - Velachery", "time": "Saturday at 05:00 PM", "contactPerson": "Mr. Govindraj", "phone": "9677009035 / 9840260684" },
        { "city": "Chennai - Virugambakkam", "time": "Saturday at 05:00 PM", "contactPerson": "Mrs. Geetha", "phone": "9952976902" },
        { "city": "Chennai - Chetpet", "time": "Saturday at 05:00 PM", "contactPerson": "Mrs. Minati", "phone": "9841989697" },
        { "city": "Chennai - Adyar", "time": "Saturday at 10:00 AM", "contactPerson": "Mrs. Jayashri", "phone": "8056244110 / 9962825215" },
        { "city": "Chennai - Virugambakkam", "time": "Saturday at 05:00 PM", "contactPerson": "Mrs. Geetha", "phone": "9952976902" },
        { "city": "Chennai - Thoraipakkam", "time": "Saturday at 05:00 PM", "contactPerson": "Mr. Arun Chakravarthy", "phone": "9710135555" },
        { "city": "Chennai - Ambattur", "time": "Saturday at 05:00 PM", "contactPerson": "Mrs. Latha", "phone": "9176726242" },
        { "city": "Chennai - Perumbakkam", "time": "Saturday at 05:00 PM", "contactPerson": "Priyanka", "phone": "7358759811" },
        { "city": "Chennai - Perungalathur", "time": "Saturday at 06:00 PM", "contactPerson": "Mr. Rajasekar", "phone": "9436921957" },
        { "city": "Chennai - Valasaravakkam", "time": "Saturday at 05:00 PM", "contactPerson": "Mrs. Visalakshi", "phone": "9360816226" },
        { "city": "Chennai - Pattipulam", "time": "Sunday at 10:00 AM", "contactPerson": "Ms. Ashika", "phone": "9384616142" },
        { "city": "Chengalpattu", "time": "Saturday at 05:00 PM", "contactPerson": "Mrs. Gajaladakmi", "phone": "9994513557" },
        { "city": "Arakkonam", "time": "Sunday at 10:00 AM", "contactPerson": "Mr. Saravanan", "phone": "9884849976" },
        { "city": "Acharapakkam", "time": "Sunday at 05:00 PM", "contactPerson": "Mrs. Jayachitra", "phone": "9994674564 / 9444006393" },
        { "city": "Kadamalaiputhur", "time": "Saturday at 05:30 PM", "contactPerson": "Mrs. Kamatchi", "phone": "9994609428 / 9940923195" },
        { "city": "Perumbair Kandikai", "time": "Monday at 06:00 PM", "contactPerson": "Mrs. Sivakami", "phone": "9444006393 / 9994674564" },
        { "city": "Puducherry", "time": "Saturday at 05:00 PM", "contactPerson": "Mrs. Manimozhi", "phone": "950045774 / 9994770455" },
        { "city": "Puducherry", "time": "Saturday at 05:00 PM", "contactPerson": "Mr. Kirubakaran", "phone": "9500044774 / 9123519408" },
        { "city": "Hosur", "time": "Saturday at 05:00 PM", "contactPerson": "Mrs. Rajeshwari", "phone": "9488091610 / 7010384499" },
        { "city": "Erode", "time": "Sunday at 05:00 PM", "contactPerson": "Mrs. Sakshi", "phone": "8072671588" },
        { "city": "Salem", "time": "Saturday at 05:00 PM", "contactPerson": "Mrs. Anitha", "phone": "8610977186" },
        { "city": "Tirupur", "time": "Sunday at 10:30 PM", "contactPerson": "Mr. Vivek", "phone": "7010947360" },
        { "city": "Udumalaipettai", "time": "Saturday at 05:00 PM", "contactPerson": "Chandra / Sankara Gomathi", "phone": "8883798791 / 9487843884" },
        { "city": "Coimbatore", "time": "Sunday at 10:00 AM", "contactPerson": "Mr. Ramachandran", "phone": "9843695577 / 8870520007" },
        { "city": "Coimbatore", "time": "Saturday at 06:00 PM", "contactPerson": "Mr. Karthik Raj", "phone": "8248964679" },
        { "city": "Coimbatore", "time": "Sunday at 11:00 AM", "contactPerson": "Mr. Kannapan", "phone": "8870520007 / 9080163104" },
        { "city": "Pollachi", "time": "Tuesday at 11:00 AM", "contactPerson": "Mrs. Prathiba", "phone": "9159191094 / 9566605183" },
        { "city": "Theni", "time": "Sunday at 10:30 AM", "contactPerson": "Mr. Muthuramlingam", "phone": "9840627934 / 7373760291 / 9442027772" },
        { "city": "Trichy", "time": "Sunday at 10:00 AM", "contactPerson": "Mr. Kandeeban", "phone": "9884305010" },
        { "city": "Neyveli", "time": "Saturday at 06:00 PM", "contactPerson": "Mrs. Nalini", "phone": "6381594021" },
        { "city": "Karaikudi", "time": "Sunday at 06:00 PM", "contactPerson": "Mrs. Sakthi", "phone": "7708852566" },
        { "city": "Dindigul", "time": "Saturday at 05:00 PM", "contactPerson": "Mrs. Manimegalai", "phone": "9894411036" },
        { "city": "Madurai", "time": "Saturday at 05:00 PM", "contactPerson": "Mr. Murali", "phone": "9384188760 / 7598861436" },
        { "city": "Melur", "time": "Saturday at 06:00 PM", "contactPerson": "Mrs. Jayashankari", "phone": "9842124150" },
        { "city": "Kovilpatti - Vanaramutti", "time": "Sunday at 10:00 AM", "contactPerson": "Mr. Rajasekar", "phone": "9436921957" }
      
];

const Our_CentersPage = () => {
  return (
    <div className="bg-red-300">
      <main>
        <div className="pt-20">
          <div className="max-w-6xl mx-auto mt-12 px-4">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Regular Online Sessions
              </h1>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-[90%] mx-auto mb-8 bg-white shadow-md rounded-lg overflow-hidden">
                <thead>
                  <tr>
                    <th className="p-3 text-left bg-red-800 text-white font-bold">City</th>
                    <th className="p-3 text-left bg-red-800 text-white font-bold">Time</th>
                    <th className="p-3 text-left bg-red-800 text-white font-bold">Contact Person</th>
                    <th className="p-3 text-left bg-red-800 text-white font-bold">Phone Number</th>
                  </tr>
                </thead>
                <tbody>
                  {scheduleData.map((row, index) => (
                    <tr 
                      key={index}
                      className="hover:bg-gray-50"
                    >
                      <td className="p-3 text-red-900 border-b">{row.city}</td>
                      <td className="p-3 text-red-900 border-b">{row.time}</td>
                      <td className="p-3 text-red-900 border-b">{row.contactPerson}</td>
                      <td className="p-3 text-red-900 border-b">{row.phone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Our_CentersPage;