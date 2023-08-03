import SamitiContext from './samiti'


// eslint-disable-next-line react/prop-types
const SamitiState = ({children}) => {
    const samktimembers=[
        {
            name:"शेरबहादुर देउवा",
            position:"सभापति",
            image:"/images/samitimember/kendriyasadasya-1"
        },
        {
            name:"पूर्णबहादुर खड्का",
            position:"उपसभापति",
            image:"/images/samitimember/kendriyasadasya-2"
        },
        {
            name:"धनराज गुरुङ",
            position:"उपसभापति",
            image:"/images/samitimember/kendriyasadasya-3"
        },
        {
            name:"गगनकुमार थापा",
            position:"महामन्त्री",
            image:"/images/samitimember/kendriyasadasya-4"
        },
        {
            name:"विश्वप्रकाश शर्मा",
            position:"महामन्त्री",
            image:"/images/samitimember/kendriyasadasya-5"
        },

        {
            name:"फरमूल्लाह मंसुर",
            position:"सहमहामन्त्री",
            image:"/images/samitimember/kendriyasadasya-6"
        },
        {
            name:"उमाकान्त चौधरी",
            position:"सहमहामन्त्री",
            image:"/images/samitimember/kendriyasadasya-7"
        },
        {
            name:"महालक्ष्मी उपाध्याय ‘डिना’",
            position:"सहमहामन्त्री",
            image:"/images/samitimember/kendriyasadasya-8"
        },
        {
            name:"किशोरसिंह राठौर",
            position:"सहमहामन्त्री",
            image:"/images/samitimember/kendriyasadasya-9"
        },
        {
            name:"बद्री पाण्डे",
            position:"सहमहामन्त्री",
            image:"/images/samitimember/kendriyasadasya-10"
        },

        {
            name:"गोपालमान श्रेष्ठ",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-11"
        },
        {
            name:"प्रकाशमान सिंह",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-12"
        },
        {
            name:"विमलेन्द्र निधि",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-13"
        },

        {
            name:"विजयकुमार गच्छदार",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-14"
        },

        {
            name:"कृष्णप्रसाद सिटौला",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-15"
        },
        {
            name:"डा. शशांक कोइराला",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-16"
        },



        {
            name:"चित्रलेखा यादव",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-17"
        },
        {
            name:"डा. रामशरण महत",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-18"
        },
        {
            name:"अर्जुननरसिंह के.सी.",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-19"
        },
        {
            name:"डा. प्रकाशशरण महत",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-20"
        },
        {
            name:"सुनिलबहादुर थापा",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-21"
        },
        {
            name:"डा. शेखर कोइराला",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-22"
        },



        {
            name:"बलबहादुर के.सी.",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-23"
        },
        {
            name:"बालकृष्ण खाँण",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-24"
        },
        {
            name:"ज्ञानेन्द्रबहादुर कार्की",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-25"
        },
        {
            name:"उमा रेग्मी",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-26"
        },
        {
            name:"रमेश रिजाल",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-27"
        },
        {
            name:"डा. नारायण खड्का",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-28"
        },



        {
            name:"जीपछिरिङ लामा",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-29"
        },
        {
            name:"सुजाता कोइराला",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-30"
        },
        {
            name:"पद्मनारायण चौधरी",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-31"
        },
        {
            name:"दिलेन्द्रप्रसाद बडू",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-32"
        },
        {
            name:"एन.पी. साउँद",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-33"
        },
        {
            name:"जीवनबहादुर शाही",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-34"
        },



        {
            name:"आनन्दप्रसाद ढुंगाना",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-35"
        },
        {
            name:"कृष्णचन्द्र नेपाली पोखरेल",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-36"
        },
        {
            name:"दिपक गिरी",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-37"
        },
        {
            name:"अजयकुमार चौरसिया",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-38"
        },
        {
            name:"अम्बिका बस्नेत",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-39"
        },
        {
            name:"पुष्पा भुसाल",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-40"
        },



        {
            name:"सुरेन्द्रराज पाण्डे",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-41"
        },
        {
            name:"शंकर भण्डारी",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-42"
        },
        {
            name:"मीनबहादुर विश्वकर्मा",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-43"
        },
        {
            name:"ईश्वरी न्यौपाने",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-44"
        },
        {
            name:"सीता गुरुङ",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-45"
        },
        {
            name:"मिनाक्षी झा",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-46"
        },



        {
            name:"सुजाता परियार",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-47"
        },
        {
            name:"केशवकुमार बुढाथोकी",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-48"
        },
        {
            name:"गोविन्द भट्टराई",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-49"
        },
        {
            name:"श्यामकुमार घिमिरे",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-50"
        },
        
        {
            name:"प्रदीप पौडेल",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-51"
        },
        {
            name:"कल्याणकुमार गुरुङ",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-52"
        },



        {
            name:"चिनकाजी श्रेष्ठ",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-53"
        },
        {
            name:"मोहनबहादुर बस्नेत",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-54"
        },
        {
            name:"देवेन्द्रराज कँडेल",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-55"
        },
        {
            name:"डा. डिला संग्रौला",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-56"
        },
        {
            name:"रमेश लेखक",
            position:"सदस्य",
            image:"/images/samitimember/kendriyasadasya-57"
        },


        



















     



    ]

    const kendiryakaryalayaMember=[
        {
            name:"कृष्ण प्रसाद पौडेल",
            position:"मुख्य सचिव",
            image:"/images/kendriyaKaryakayaMembers/member-1.jpg"
        },
        {
            name:"प्रकाश शर्मा",
            position:"सचिव",
            image:"/images/kendriyaKaryakayaMembers/member-2.jpg"
        },
        {
            name:"डा. प्रदीप पराजुली",
            position:"सचिव",
            image:"/images/kendriyaKaryakayaMembers/member-3.jpg"
        },
        {
            name:"केशव रिजाल",
            position:"सचिव",
            image:"/images/kendriyaKaryakayaMembers/member-4.jpg"
        },
        {
            name:"प्रेम के.सी.",
            position:"सचिव",
            image:"/images/kendriyaKaryakayaMembers/member-5.jpg"
        },
        {
            name:"मुक्ति आचार्य",
            position:"सचिव",
            image:"/images/kendriyaKaryakayaMembers/member-6.jpg"
        },
        {
            name:"कृष्णप्रसाद दुलाल",
            position:"सचिव",
            image:"/images/kendriyaKaryakayaMembers/member-7.jpg"
        },
        {
            name:"रवीन बज्राचार्य",
            position:"सहसचिव",
            image:"/images/kendriyaKaryakayaMembers/member-8.jpg"
        },
        {
            name:"अमृत कार्की",
            position:"वरिष्ठ प्राविधिक अधिकृत",
            image:"/images/kendriyaKaryakayaMembers/member-9.jpg"
        },
    ]
  return (
    <SamitiContext.Provider value={{samktimembers,kendiryakaryalayaMember}}>
    {children}
</SamitiContext.Provider>
  )
}


export default SamitiState 
