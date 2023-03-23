let Products =[
    {id:1,name:"ST8000VN004",price:899.00,description:"Disco duro Seagate Ironwolf NAS ST8000VN004, 8TB, SATA 6Gb/s, 7200rpm, 256MB Cache, 3.5",category:"computo",stock:2,img:"assets/img/hdd-sagate-8tb.jpg"},
    {id:2,name:"100-100000147BOX",price:449.00,description:"Procesador AMD Ryzen 5 4600G, 3.70 / 4.20GHz, 8MB L3, 6 Core, AM4, 7nm, 65W.",category:"computo",stock:3,img:"assets/img/procesador-ryzen5.jpg"},
    {id:3,name:"82KU00SFLM",price:1147.00,description:"Laptop Lenovo IdeaPad 3, 15.6 FHD, Ryzen 3 5300U, 8GB RAM DDR4, 1TB SATA Almacenamiento",category:6,stock:0,img:"assets/img/laptop-ideapad3.jpg"},
    {id:4,name:"Z590 AORUS ULTRA",price:1009.00,description:"Motherboard Gigabyte Z590 Aorus ULTRA, 1200, Z590, DDR4",category:"computo",stock:1,img:"assets/img/motherborad-gigabytez590.jpg"},
    {id:5,name:"TE-2710S",price:529,description:"Monitor Teros TE-2710S, 27 VA, FLAT 75Hz, 1920x1080, Full HD, HDMI",category:"computo",stock:2,img:"assets/img/monitor-teros-te-2710s.jpg"},
    {id:6,name:"SM-R860NZSALTA",price:840,description:"GALAXY SAMSUNG WATCH 4 40MM",category:"celular",stock:2,img:"assets/img/galaxy-samsumg-wathc4.jpg"},
    {id:7,name:"U280-Q01FL-BK",price:95,description:"Base de Carga Rápida Inalámbrica Qi Tripp-Lite para Telefonos, Negro.",category:"celular",stock:0,img:"assets/img/base-carga-rapida.jpg"},
    {id:8,name:"CA-9011186-NA",price:715.00,description:"Audífonos gamer con micrófono Corsair Virtuoso Wireless Blanco",category:"celular",stock:3,img:"assets/img/audifonos-gamer-blanco.jpg"},
    {id:9,name:"8KZ-00001",price:320,description:"Microsoft Modern USB-C Speaker",category:"celular",stock:1,img:"assets/img/modern-usb-c-speaker.jpg"},
    
];

localStorage.setItem("Products", JSON.stringify(Products));

