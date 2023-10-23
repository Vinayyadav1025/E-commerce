const cardData = [
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/image1.jpg',
        title: 'This is Electronic Mobile. It have best price for Sale.',
        localPrice: '9000',
        discount:'11',
        emi: '800/month',
        category:'mobile',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/home1.jpg',
        title: 'These Home Appliances are available for Sale.',
        localPrice: '54000',
        discount:'6',
        emi: '3500/month',
        category:'home_appliances',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/keyboardandmouse1.jpg',
        title: 'These Home Appliances are available for Sale.',
        localPrice: '54000',
        discount:'6',
        emi: '3500/month',
        category:'keyboardandmouse',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/sound1.jpg',
        title: 'This sound is usefull for Home and Office.',
        localPrice: '3000',
        discount:'10',
        emi: '250/month',
        category:'sound',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/TV1.jpg',
        title: 'This TV is available  for Sale in best price.',
        localPrice: '18000',
        discount:'9',
        emi: '1500/month',
        category:'tv',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/printer1.jpg',
        title: 'This is best printer for  Sale availabe in best discoount.',
        localPrice: '8000',
        discount:'27',
        emi: '500/month',
        category:'printer',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/watch1.jpg',
        title: 'This is Electronic Watch. It is available  for Sale.',
        localPrice: '5000',
        discount:'14',
        emi: '600/month',
        category:'watch',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/keyboardandmouse2.jpg',
        title: 'These Home Appliances are available for Sale.',
        localPrice: '54000',
        discount:'6',
        emi: '3500/month',
        category:'keyboardandmouse',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/image8.jpg',
        title: 'Laptop is availabe for Sale in best Price.',
        localPrice: '50000',
        discount:'10',
        emi: '4000/month',
        category:'laptop',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/image2.jpg',
        title: 'This Mobile is available for Sale.',
        localPrice: '9000',
        discount:'7',
        emi: '1100/month',
        category:'mobile',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/home2.jpg',
        title: 'These Home Appliances are available is lowest Price',
        localPrice: '15000',
        discount:'17',
        emi: '1500/month',
        category:'home_appliances',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/keyboardandmouse3.jpg',
        title: 'These Home Appliances are available for Sale.',
        localPrice: '54000',
        discount:'6',
        emi: '3500/month',
        category:'keyboardandmouse',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/sound2.jpg',
        title: 'This sound is usefull for anywhere.',
        localPrice: '1500',
        discount:'8',
        emi: '750/month',
        category:'sound',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/TV2.jpg',
        title: 'This TV is available  in lowest Price.',
        localPrice: '15000',
        discount:'12',
        emi: '1500/month',
        category:'tv',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/printer2.jpg',
        title: 'This is best printer usefull at shop.',
        localPrice: '13000',
        discount:'14',
        emi: '900/month',
        category:'printer',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/watch2.jpg',
        title: 'This Electronic Watch is usefull for work in Office.',
        localPrice: '7000',
        discount:'7',
        emi: '1100/month',
        category:'watch',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/keyboardandmouse4.jpg',
        title: 'These Home Appliances are available for Sale.',
        localPrice: '54000',
        discount:'6',
        emi: '3500/month',
        category:'keyboardandmouse',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/image11.jpg',
        title: 'This Laptop is usefull  for Home and Office.',
        localPrice: '70000',
        discount:'14',
        emi: '3000/month',
        category:'laptop',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/image3.jpg',
        title: 'This is Electronic Mobile. It have best price for Sale.',
        localPrice: '9000',
        discount:'11',
        emi: '800/month',
        category:'mobile',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/home3.jpg',
        title: 'These Home Appliances are available for Sale.',
        localPrice: '54000',
        discount:'6',
        emi: '3500/month',
        category:'home_appliances',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/image14.jpg',
        title: 'Laptop is availabe for Sale in best Price.',
        localPrice: '50000',
        discount:'10',
        emi: '4000/month',
        category:'laptop',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/sound3.jpg',
        title: 'This sound is usefull for Home and Office.',
        localPrice: '3000',
        discount:'10',
        emi: '250/month',
        category:'sound',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/TV3.jpg',
        title: 'This TV is available  for Sale in best price.',
        localPrice: '18000',
        discount:'9',
        emi: '1500/month',
        category:'tv',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/printer3.jpg',
        title: 'This is best printer for  Sale availabe in best discoount.',
        localPrice: '8000',
        discount:'27',
        emi: '500/month',
        category:'printer',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/watch3.jpg',
        title: 'This is Electronic Watch. It is available  for Sale.',
        localPrice: '5000',
        discount:'14',
        emi: '600/month',
        category:'watch',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/keyboardandmouse6.jpg',
        title: 'These Home Appliances are available for Sale.',
        localPrice: '54000',
        discount:'6',
        emi: '3500/month',
        category:'keyboardandmouse',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/image12.jpg',
        title: 'Laptop is availabe for Sale in best Price.',
        localPrice: '50000',
        discount:'10',
        emi: '4000/month',
        category:'laptop',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/home9.jpg',
        title: 'These Home Appliances are available for Sale.',
        localPrice: '54000',
        discount:'6',
        emi: '3500/month',
        category:'home_appliances',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/image4.jpg',
        title: 'This is Electronic Mobile. It have best price for Sale.',
        localPrice: '9000',
        discount:'11',
        emi: '800/month',
        category:'mobile',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/watch7.jpg',
        title: 'This is Electronic Watch. It is available  for Sale.',
        localPrice: '5000',
        discount:'14',
        emi: '600/month',
        category:'watch',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/home4.jpg',
        title: 'These Home Appliances are available for Sale.',
        localPrice: '54000',
        discount:'6',
        emi: '3500/month',
        category:'home_appliances',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/keyboardandmouse7.jpg',
        title: 'These Home Appliances are available for Sale.',
        localPrice: '54000',
        discount:'6',
        emi: '3500/month',
        category:'keyboardandmouse',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/sound4.jpg',
        title: 'This sound is usefull for Home and Office.',
        localPrice: '3000',
        discount:'10',
        emi: '250/month',
        category:'sound',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/watch8.jpg',
        title: 'This is Electronic Watch. It is available  for Sale.',
        localPrice: '5000',
        discount:'14',
        emi: '600/month',
        category:'watch',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/TV4.jpg',
        title: 'This TV is available  for Sale in best price.',
        localPrice: '18000',
        discount:'9',
        emi: '1500/month',
        category:'tv',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/home8.jpg',
        title: 'These Home Appliances are available for Sale.',
        localPrice: '54000',
        discount:'6',
        emi: '3500/month',
        category:'home_appliances',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/image6.jpg',
        title: 'This is Electronic Mobile. It have best price for Sale.',
        localPrice: '9000',
        discount:'11',
        emi: '800/month',
        category:'mobile',
    },
    
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/printer7.jpg',
        title: 'This is best printer for  Sale availabe in best discoount.',
        localPrice: '8000',
        discount:'27',
        emi: '500/month',
        category:'printer',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/home6.jpg',
        title: 'These Home Appliances are available for Sale.',
        localPrice: '54000',
        discount:'6',
        emi: '3500/month',
        category:'home_appliances',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/TV6.jpg',
        title: 'This TV is available  for Sale in best price.',
        localPrice: '18000',
        discount:'9',
        emi: '1500/month',
        category:'tv',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/printer6.jpg',
        title: 'This is best printer for  Sale availabe in best discoount.',
        localPrice: '8000',
        discount:'27',
        emi: '500/month',
        category:'printer',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/watch6.jpg',
        title: 'This is Electronic Watch. It is available  for Sale.',
        localPrice: '5000',
        discount:'14',
        emi: '600/month',
        category:'watch',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/image14.jpg',
        title: 'Laptop is availabe for Sale in best Price.',
        localPrice: '50000',
        discount:'10',
        emi: '4000/month',
        category:'laptop',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/printer4.jpg',
        title: 'This is best printer for  Sale availabe in best discoount.',
        localPrice: '8000',
        discount:'27',
        emi: '500/month',
        category:'printer',
    },

    {
        imageSrc: window.location.origin + '/images/Electronicsimage/watch4.jpg',
        title: 'This is Electronic Watch. It is available  for Sale.',
        localPrice: '5000',
        discount:'14',
        emi: '600/month',
        category:'watch',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/image13.jpg',
        title: 'Laptop is availabe for Sale in best Price.',
        localPrice: '50000',
        discount:'10',
        emi: '4000/month',
        category:'laptop',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/home7.jpg',
        title: 'These Home Appliances are available for Sale.',
        localPrice: '54000',
        discount:'6',
        emi: '3500/month',
        category:'home_appliances',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/keyboardandmouse8.jpg',
        title: 'These Home Appliances are available for Sale.',
        localPrice: '54000',
        discount:'6',
        emi: '3500/month',
        category:'keyboardandmouse',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/printer8.jpg',
        title: 'This is best printer for  Sale availabe in best discoount.',
        localPrice: '8000',
        discount:'27',
        emi: '500/month',
        category:'printer',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/watch9.jpg',
        title: 'This is Electronic Watch. It is available  for Sale.',
        localPrice: '5000',
        discount:'14',
        emi: '600/month',
        category:'watch',
    },
    {
        imageSrc: window.location.origin + '/images/Electronicsimage/home8.jpg',
        title: 'These Home Appliances are available for Sale.',
        localPrice: '54000',
        discount:'6',
        emi: '3500/month',
        category:'home_appliances',
    },
]
export function ElectronicsItem() {
    return cardData;
    }