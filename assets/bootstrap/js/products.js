const productsData = [
  // Laptop gamimg
  {
    id: 1,
    name: "Laptop Acer Nitro V",
    category: "laptop",
    subCategory: "gaming",
    brand: "Acer",

    rating: 4.8,
    reviewCount: 123,

    price: 32490000,
    oldPrice: 34990000,
    discount: "-7,14%",
    quantity: 12,

    images: [
      "../assets/img/laptopgaming/laptop-acer-gaming-nitro-v-1.png",
      "../assets/img/laptopgaming/laptop-acer-gaming-nitro-v-2.png",
      "../assets/img/laptopgaming/laptop-acer-gaming-nitro-v-3.png",
      "../assets/img/laptopgaming/laptop-acer-gaming-nitro-v-4.png",
      "../assets/img/laptopgaming/laptop-acer-gaming-nitro-v-5.png",
    ],

    highlightSpecs: {
      cpu: " Intel® Core™ i7-13620H (2.4 GHz - 4.9GHz/ 24MB/ 10 nhân, 16 luồng)",
      gpu: "NVIDIA GeForce RTX 5050",
      ram: "1 x 16GB 3200MHz DDR4 (Hỗ trợ tối đa 64GB)",
      ssd: " 512GB SSD M.2 NVMe",
      main: null,
      screen:
        " 15.6 inch Full HD (1920 x 1080) IPS, 180Hz, Màn hình chống lóa, 300 nits, Acer ComfyView, 100% sRGB",
      battery: "4 cell 76 Wh , Pin liền",
      connect: null,
      feature: null,
      layout: null,
      keycap: null,
      panel: null,
      size: null,
      hz: null,
    },

    description: {
      intro:
        "Laptop Acer Gaming Nitro V ProPanel ANV15-52-72BM thuộc dòng laptop gaming thế hệ mới của Acer. Máy sở hữu CPU Intel Core i7-13620H, GPU NVIDIA GeForce RTX 5050 cùng màn hình 15.6 inch 180Hz. Sản phẩm mang đến trải nghiệm mượt mà, hình ảnh sắc nét và màu sắc sống động. Đây là một lựa chọn đáng giá trong phân khúc laptop gaming tầm trung-cao.",

      sections: [
        {
          title: "Thiết kế gọn nhẹ, đậm chất gaming",
          content:
            "Vỏ màu đen Obsidian chắc chắn, trọng lượng 2.1kg, dễ mang theo nhưng vẫn giữ phong cách mạnh mẽ.",
          image: "../assets/img/laptopgaming/laptop-acer-gaming-nitro-v-5.png",
        },
        {
          title: "Hiệu năng mạnh mẽ",
          content:
            "Trang bị Intel Core i7-13620H kết hợp GPU RTX 5050: Hiệu năng mạnh mẽ cho gaming và đa nhiệm, xử lý mượt mà các tựa game AAA và tác vụ đồ họa chuyên sâu.",
          image: "../assets/img/laptopgaming/laptop-acer-gaming-nitro-v-4.png",
        },
        {
          title: "Màn hình 180Hz chuẩn màu 100% sRGB",
          content:
            "Màn hình 180Hz chuẩn màu 100% sRGB: Hiển thị hình ảnh sắc nét, chuyển động mượt, màu sắc chính xác, tối ưu trải nghiệm chơi game và chỉnh sửa hình ảnh/video.",
          image: "../assets/img/laptopgaming/laptop-acer-gaming-nitro-v-3.png",
        },
      ],
    },

    brandInfo: {
      brand: "Acer",
      model: "Aser Nitro",
      color: "Đen",
      weight: "2.1kg",
      ports:
        "3 x USB 3.2, 1 x Thunderbolt 4, Audio combo, 1 x HDMI, LAN 1 Gb/s",
    },
  },
  {
    id: 2,
    name: "Laptop Msi Cyborg 15",
    category: "laptop",
    subCategory: "gaming",
    brand: "Msi",

    rating: 4.6,
    reviewCount: 88,

    price: 26990000,
    oldPrice: 29990000,
    discount: "-10%",
    quantity: 9,

    images: [
      "../assets/img/laptopgaming/laptop-msi-cyborg-15-1.png",
      "../assets/img/laptopgaming/laptop-msi-cyborg-15-2.png",
      "../assets/img/laptopgaming/laptop-msi-cyborg-15-3.png",
      "../assets/img/laptopgaming/laptop-msi-cyborg-15-4.png",
      "../assets/img/laptopgaming/laptop-msi-cyborg-15-5.png",
    ],

    highlightSpecs: {
      cpu: "Intel® Core™ i5-13420H (2.1 GHz - 4.6 GHz/ 12MB/ 8 nhân, 12 luồng)",
      gpu: "NVIDIA GeForce RTX 5050",
      ram: "1 x 16GB 5600MHz DDR5 (Hỗ trợ tối đa 96GB)",
      ssd: "512GB SSD M.2 NVMe",
      main: null,
      screen: " 15.6 inch Full HD (1920 x 1080) IPS, 144Hz,",
      battery: "4 cell 55 Wh , Pin liền",
      connect: "Wi-Fi 6E (802.11ax) , Bluetooth 5.3",
      feature: null,
      layout: null,
      keycap: null,
      panel: null,
      size: null,
      hz: null,
    },

    description: {
      intro:
        "Laptop MSI Cyborg 15 là mẫu laptop gaming tầm trung, mang đến hiệu năng mạnh mẽ cho game thủ và nhà sáng tạo nội dung.",

      sections: [
        {
          title: "Thiết kế xuyên thấu độc đáo",
          content:
            " Lớp vỏ màu Translucent Black cùng bàn phím RGB 4 vùng có các phím WASD được làm nổi bật, tạo nên một phong cách gaming hiện đại và đậm chất tương lai.",
          image: "../assets/img/laptopgaming/laptop-msi-cyborg-15-5.png",
        },
        {
          title: "Hiệu năng gaming mạnh mẽ",
          content:
            "Trang bị CPU Intel Core i5-13420H và GPU NVIDIA GeForce RTX 5050, mang lại khả năng xử lý vượt trội cho các tựa game AAA và ứng dụng đồ họa nặng.",
          image: "../assets/img/laptopgaming/laptop-msi-cyborg-15-4.png",
        },
        {
          title: "Màn hình 144Hz mượt mà",
          content:
            " Màn hình 15.6 inch Full HD với tần số quét 144Hz, đảm bảo hình ảnh chuyển động trôi chảy, giảm thiểu hiện tượng xé hình trong các pha hành động nhanh.",
          image: "../assets/img/laptopgaming/laptop-msi-cyborg-15-3.png",
        },
      ],
    },

    brandInfo: {
      brand: "Msi",
      model: "MSI Cyborg",
      color: "Đen",
      weight: "1.9kg",
      ports:
        "1 x USB Type C / DisplayPort / Power Delivery, 2 x USB 3.2, Audio combo, 1 x HDMI, LAN 1 Gb/s",
    },
  },
  {
    id: 3,
    name: "Laptop Gigabyte Gaming A16",
    category: "laptop",
    subCategory: "gaming",
    brand: "Gigabyte",

    rating: 4.7,
    reviewCount: 36,

    price: 27490000,
    oldPrice: 29990000,
    discount: "-5%",
    quantity: 10,

    images: [
      "../assets/img/laptopgaming/laptop-gigabyte-gaming-a16-1.png",
      "../assets/img/laptopgaming/laptop-gigabyte-gaming-a16-2.png",
      "../assets/img/laptopgaming/laptop-gigabyte-gaming-a16-3.png",
      "../assets/img/laptopgaming/laptop-gigabyte-gaming-a16-4.png",
      "../assets/img/laptopgaming/laptop-gigabyte-gaming-a16-5.png",
    ],

    highlightSpecs: {
      cpu: "Intel® Core™ i7-13620H (2.4 GHz - 4.9GHz/ 24MB/ 10 nhân, 16 luồng)",
      gpu: "GeForce RTX™ 4050 6GB GDDR6 Intel® Graphics",
      ram: "1 x 16GB 5200MHz DDR5 (Hỗ trợ tối đa 64GB)",
      ssd: "1TB SSD M.2 NVMe",
      main: null,
      screen:
        "16 inch WUXGA (1920 x 1200) IPS, 165Hz, không cảm ứng, Màn hình chống lóa",
      battery: "4 cell 76 Wh , Pin liền",
      connect: null,
      feature: null,
      layout: null,
      keycap: null,
      panel: null,
      size: null,
      hz: null,
    },

    description: {
      intro:
        "Laptop Gigabyte Gaming A16 mang đến một cấu hình mạnh mẽ, đáp ứng tốt nhu cầu chơi game và làm việc hiệu suất cao.",

      sections: [
        {
          title:
            "Laptop Gigabyte Gaming A16 Cân bằng từ hiệu năng đến thiết kế",
          content:
            "laptop được thiết kế hướng đến người dùng yêu cầu hiệu năng đồ họa mạnh mẽ và khả năng xử lý đa nhiệm. Máy sở hữu cấu hình linh hoạt, đi cùng với hệ thống tản nhiệt và khả năng nâng cấp đáng chú ý.",
          image: "../assets/img/laptopgaming/laptop-gigabyte-gaming-a16-5.png",
        },
        {
          title: "Hiệu năng Gaming vượt trội",
          content:
            "Sự kết hợp giữa CPU Intel Core i7-13620H và GPU GeForce RTX 4050 6GB GDDR6 cung cấp sức mạnh để xử lý các tựa game phổ biến và công việc đồ họa chuyên nghiệp.",
          image: "../assets/img/laptopgaming/laptop-gigabyte-gaming-a16-4.png",
        },
        {
          title: "Màn hình WUXGA 165Hz",
          content:
            "Màn hình 16 inch có độ phân giải 1920 x 1200 và tần số quét 165Hz, mang lại hình ảnh sắc nét, chuyển động mượt mà và giảm thiểu hiện tượng xé hình khi chơi game.",
          image: "../assets/img/laptopgaming/laptop-gigabyte-gaming-a16-3.png",
        },
      ],
    },

    brandInfo: {
      brand: "Gigabyte",
      model: "Gigabyte A Series",
      color: "Đen",
      weight: "2.2kg",
      ports:
        "1 x USB Type C / DisplayPort / Power Delivery, 2 x USB 3.2, 1 x USB 2.0, Audio combo, 1 x HDMI, LAN 1 Gb/s",
    },
  },
  {
    id: 4,
    name: "Laptop Asus Tuf Gamming F16",
    category: "laptop",
    subCategory: "gaming",
    brand: "Asus",

    rating: 5,
    reviewCount: 36,

    price: 37990000,
    oldPrice: 40290000,
    discount: "-5.71%",
    quantity: 11,

    images: [
      "../assets/img/laptopgaming/laptop-asus-tuf-gaming-f16-1.png",
      "../assets/img/laptopgaming/laptop-asus-tuf-gaming-f16-2.png",
      "../assets/img/laptopgaming/laptop-asus-tuf-gaming-f16-3.png",
      "../assets/img/laptopgaming/laptop-asus-tuf-gaming-f16-4.png",
      "../assets/img/laptopgaming/laptop-asus-tuf-gaming-f16-5.png",
    ],

    highlightSpecs: {
      cpu: "Intel® Core™ i7-14650HX (2.2 GHz - 5.2 GHz/ 30MB/ 16 nhân, 24 luồng)",
      gpu: "GeForce RTX™ 5060 8GB GDDR7 115W , 572 AI TOPs ) Intel® Graphics",
      ram: "1 x 16GB 5600MHz DDR5 (Hỗ trợ tối đa 64GB)",
      ssd: "1TB SSD M.2 NVMe",
      main: null,
      screen:
        "16 inch WUXGA (1920 x 1200) IPS, 165Hz, Màn hình chống lóa, 300 nits, G-Sync, 72% NTSC",
      battery: "4 cell 90 Wh , Pin liền",
      connect: null,
      feature: null,
      layout: null,
      keycap: null,
      panel: null,
      size: null,
      hz: null,
    },

    description: {
      intro:
        "Laptop ASUS TUF Gaming F16 FX608JMR-RV048W là lựa chọn nổi bật trong phân khúc laptop gaming cao cấp với CPU Intel Core  i7-14650HX và RTX 5060, mang đến hiệu năng vượt trội, dễ dàng cân mọi tựa game AAA và công việc sáng tạo. Thiết kế mỏng nhẹ, chuẩn quân đội cùng màn hình 165Hz FHD+ tạo trải nghiệm tuyệt vời. Sản phẩm phù hợp cho người dùng cần một chiếc laptop mạnh mẽ, di động.",

      sections: [
        {
          title: "Thiết kế bền bỉ",
          content: "Chuẩn MIL-STD-810H, trọng lượng 2.2 kg, dễ dàng di chuyển.",
          image: "../assets/img/laptopgaming/laptop-asus-tuf-gaming-f16-5.png",
        },
        {
          title: "Hiệu năng đỉnh cao",
          content:
            " CPU i7-14650HX và RTX 5060 giúp chơi mượt game AAA, hỗ trợ đa nhiệm mượt mà.",
          image: "../assets/img/laptopgaming/laptop-asus-tuf-gaming-f16-4.png",
        },
        {
          title: "Màn hình mượt mà",
          content:
            "Tần số quét 165Hz, độ phủ 72% NTSC, phù hợp cho game và sáng tạo.",
          image: "../assets/img/laptopgaming/laptop-asus-tuf-gaming-f16-3.png",
        },
      ],
    },

    brandInfo: {
      brand: "Asus",
      model: "ASUS TUF Gaming",
      color: "xám",
      weight: "2.2kg",
      ports:
        "1 x USB Type C / DisplayPort / Power Delivery, 3 x USB 3.2, 1 x Thunderbolt 4, Audio combo, 1 x HDMI, LAN 1 Gb/s",
    },
  },
  {
    id: 5,
    name: "Laptop Lenovo Legion 5",
    category: "laptop",
    subCategory: "gaming",
    brand: "Lenovo",

    rating: 4.4,
    reviewCount: 36,

    price: 36990000,
    oldPrice: 40990000,
    discount: "-10%",
    quantity: 7,

    images: [
      "../assets/img/laptopgaming/laptop-legion-5-15irx10-1.png",
      "../assets/img/laptopgaming/laptop-legion-5-15irx10-2.png",
      "../assets/img/laptopgaming/laptop-legion-5-15irx10-3.png",
      "../assets/img/laptopgaming/laptop-legion-5-15irx10-4.png",
      "../assets/img/laptopgaming/laptop-legion-5-15irx10-5.png",
    ],

    highlightSpecs: {
      cpu: "Intel® Core™ i7-13650HX (2.6 GHz - 4.9GHz/ 24MB/ 14 nhân, 20 luồng)",
      gpu: "GeForce RTX™ 5050 8GB GDDR7 ( 2662MHz , 115W , 440 AI TOPs ) Intel® Graphics",
      ram: "1 x 16GB 4800MHz DDR5 (Hỗ trợ tối đa 32GB)",
      ssd: "512GB SSD M.2 NVMe",
      main: null,
      screen:
        "15.3 inch WUXGA (1920 x 1200) IPS, 165Hz, Màn hình chống lóa, 300 nits, G-Sync, 100% sRGB",
      battery: "80 Wh , Pin liền",
      connect: null,
      feature: null,
      layout: null,
      keycap: null,
      panel: null,
      size: null,
      hz: null,
    },

    description: {
      intro:
        "Laptop Lenovo Legion 5 mang đến hiệu năng gaming cao cấp nhờ sự kết hợp giữa bộ vi xử lý Intel Core i7-13650HX tích hợp công nghệ Intel AI và card đồ họa GeForce RTX 5050 8GB GDDR7. Sản phẩm sở hữu màn hình 15.3 inch WUXGA với tần số quét 165Hz, đảm bảo hình ảnh mượt mà và sắc nét. Thiết kế vỏ nhôm bền bỉ, bàn phím 24-Zone RGB và hệ thống kết nối hiện đại với Wi-Fi 7, đáp ứng tốt nhu cầu của các game thủ chuyên nghiệp và người dùng sáng tạo nội dung.",

      sections: [
        {
          title: "Thiết kế bền bỉ và di động",
          content:
            "Vỏ nhôm nguyên khối chắc chắn, khối lượng chỉ 1.9 kg và độ mỏng ấn tượng, dễ dàng mang theo bên mình để chơi game hoặc làm việc mọi lúc mọi nơi.",
          image: "../assets/img/laptopgaming/laptop-legion-5-15irx10-5.png",
        },
        {
          title: "Hiệu năng đỉnh cao",
          content:
            " Trang bị CPU Intel Core i7-13650HX và GPU GeForce RTX 5050 8GB GDDR7, cung cấp sức mạnh xử lý vượt trội cho các tựa game AAA và ứng dụng đồ họa chuyên sâu.",
          image: "../assets/img/laptopgaming/laptop-legion-5-15irx10-4.png",
        },
        {
          title: "Màn hình gaming chuyên nghiệp",
          content:
            "Màn hình 15.3 inch WUXGA IPS tần số quét 165Hz, độ phủ màu 100% sRGB và công nghệ G-Sync, mang lại hình ảnh mượt mà, không xé hình.",
          image: "../assets/img/laptopgaming/laptop-legion-5-15irx10-3.png",
        },
      ],
    },

    brandInfo: {
      brand: "Lenovo",
      model: "Lenovo Legion",
      color: "Đen",
      weight: "1.9kg",
      ports:
        "1 x USB Type C / DisplayPort / Power Delivery, 1 x USB Type, C/DisplayPort, 3 x USB 3.2, Audio combo, 1 x HDMI, LAN 1 Gb/s",
    },
  },
  {
    id: 6,
    name: "Laptop Lenovo LOQ",
    category: "laptop",
    subCategory: "gaming",
    brand: "Lenovo",

    rating: 4.8,
    reviewCount: 46,

    price: 24490000,
    oldPrice: 26990000,
    discount: "-9%",
    quantity: 5,

    images: [
      "../assets/img/laptopgaming/laptop-lenovo-loq-1.png",
      "../assets/img/laptopgaming/laptop-lenovo-loq-2.png",
      "../assets/img/laptopgaming/laptop-lenovo-loq-3.png",
      "../assets/img/laptopgaming/laptop-lenovo-loq-4.png",
      "../assets/img/laptopgaming/laptop-lenovo-loq-5.png",
    ],

    highlightSpecs: {
      cpu: "AMD Ryzen™ 7 7735HS (3.2 GHz - 4.75 GHz/ 16MB/ 8 nhân, 16 luồng)",
      gpu: "GeForce RTX™ 3050 6GB GDDR6 ( 990 MHz , 65W , AMD Radeon™ Graphics",
      ram: "1 x 16GB DDR5 4800MHz ( 2 Khe cắm / Không nâng cấp được )",
      ssd: "512GB SSD M.2 NVMe ( 2 x M.2 2242 )",
      main: null,
      screen:
        "15.6 inch ( 1920 x 1080 ) Full HD IPS , 144Hz , không cảm ứng , 300 nits , 100% sRGB , Màn hình chống lóa , FreeSync",
      battery: "57 Wh , Pin liền",
      connect: null,
      feature: null,
      layout: null,
      keycap: null,
      panel: null,
      size: null,
      hz: null,
    },

    description: {
      intro:
        "Laptop Lenovo LOQ Essential mang đến một cấu hình mạnh mẽ, cân bằng giữa hiệu năng và tính di động, đáp ứng tốt các nhu cầu từ chơi game đến công việc. Sản phẩm được trang bị bộ vi xử lý AMD Ryzen 7 7735HS, card đồ họa GeForce RTX 3050 6GB và màn hình 15.6 inch Full HD với tần số quét 144Hz. Những thông số này đảm bảo khả năng xử lý mượt mà các tác vụ nặng, đồng thời cung cấp trải nghiệm hình ảnh sống động, sắc nét cho cả giải trí và sáng tạo nội dung.",

      sections: [
        {
          title: "Thiết kế tinh tế và di động",
          content:
            "Với trọng lượng chỉ 1.8 kg và màu xám hiện đại, sản phẩm vừa có tính thẩm mỹ cao, vừa dễ dàng mang theo bên mình.",
          image: "../assets/img/laptopgaming/laptop-lenovo-loq-5.png",
        },
        {
          title: "Hiệu năng gaming mạnh mẽ",
          content:
            "Trang bị CPU AMD Ryzen 7 7735HS và GPU GeForce RTX 3050 6GB, đảm bảo xử lý mượt mà các tựa game phổ biến và ứng dụng đồ họa chuyên sâu.",
          image: "../assets/img/laptopgaming/laptop-lenovo-loq-4.png",
        },
        {
          title: "Màn hình 144Hz sắc nét",
          content:
            "Tấm nền IPS 15.6 inch Full HD, tần số quét 144Hz cùng độ phủ màu 100% sRGB, mang lại hình ảnh sống động và chuyển động siêu mượt.",
          image: "../assets/img/laptopgaming/laptop-lenovo-loq-3.png",
        },
      ],
    },

    brandInfo: {
      brand: "Lenovo",
      model: "Lenovo LOQ",
      color: "Xám",
      weight: "1.8kg",
      ports:
        "1 x USB Type C / Power Delivery, 2 x USB 3.2, 1 x SD card slot, Audio combo, 1 x HDMI, LAN 1 Gb/s",
    },
  },
  {
    id: 7,
    name: "Laptop Msi VenturePro 16 AI",
    category: "laptop",
    subCategory: "gaming",
    brand: "Msi",

    rating: 5,
    reviewCount: 29,

    price: 33990000,
    oldPrice: 35290000,
    discount: "-4%",
    quantity: 4,

    images: [
      "../assets/img/laptopgaming/laptop-msi-venturepro-16-1.png",
      "../assets/img/laptopgaming/laptop-msi-venturepro-16-2.png",
      "../assets/img/laptopgaming/laptop-msi-venturepro-16-3.png",
      "../assets/img/laptopgaming/laptop-msi-venturepro-16-4.png",
      "../assets/img/laptopgaming/laptop-msi-venturepro-16-5.png",
    ],

    highlightSpecs: {
      cpu: "Intel® Core™ Ultra 7-155H ( 3.8 GHz - 4.8 GHz / 24MB / 16 nhân, 22 luồng ), Intel AI",
      gpu: "Intel® AI Boost NPU, GeForce RTX™ 4050 6GB GDDR6 ( 1605MHz , 45W , 194 AI TOPs ) Intel® Graphics",
      ram: "2 x 8GB DDR5 5600MHz ( 2 Khe cắm / Hỗ trợ tối đa 96GB )",
      ssd: "512GB SSD M.2 NVMe ( 1 x M.2 NVMe )",
      main: null,
      screen:
        "16 inch ( 2048 x 1280 ) 2K 16:10 , OLED , 120Hz , không cảm ứng , 100% DCI-P3",
      battery: "4 cell 55 Wh , Pin liền",
      connect: null,
      feature: null,
      layout: null,
      keycap: null,
      panel: null,
      size: null,
      hz: null,
    },

    description: {
      intro:
        "Laptop MSI VenturePro 16 AI là dòng laptop cao cấp từ MSI, hướng đến người dùng chuyên nghiệp như nhà sáng tạo nội dung, kỹ sư và lập trình viên. Trang bị Intel® Core™ Ultra 7-155H, NVIDIA GeForce RTX 4050 6GB, màn hình 16 inch 2K OLED 120Hz, RAM 16GB DDR5 và SSD 512GB M.2 NVMe, sản phẩm mang lại hiệu năng vượt trội cho thiết kế đồ họa, dựng video và chơi game AAA cơ bản. Với thiết kế mỏng nhẹ 1.9kg, đây là lựa chọn lý tưởng cho công việc di động và giải trí đỉnh cao.",

      sections: [
        {
          title: "Thiết kế mỏng nhẹ",
          content:
            "Trọng lượng 1.9kg, kích thước 359.3 x 245.25 x 22-23mm, dễ dàng di chuyển, màu xám tinh tế.",
          image: "../assets/img/laptopgaming/laptop-msi-venturepro-16-5.png",
        },
        {
          title: "Hiệu năng mạnh mẽ",
          content:
            " Intel® Core™ Ultra 7-155H (16 nhân, 22 luồng, tối đa 4.8GHz) xử lý đa nhiệm mượt mà, hỗ trợ tác vụ AI tối ưu, Phím Copilot chuyên dụng và công nghệ Intel AI tăng tốc tác vụ thông minh trên Windows 11 Home.",
          image: "../assets/img/laptopgaming/laptop-msi-venturepro-16-4.png",
        },
        {
          title: "Màn hình OLED sắc nét",
          content:
            "Độ phân giải 2K (2048 x 1280), tần số 120Hz, 100% DCI-P3, hiển thị màu sắc sống động cho sáng tạo và giải trí.",
          image: "../assets/img/laptopgaming/laptop-msi-venturepro-16-3.png",
        },
      ],
    },

    brandInfo: {
      brand: "Msi",
      model: "Msi VenturePro",
      color: "Xám",
      weight: "1.9kg",
      ports:
        "1 x USB Type C / DisplayPort / Power Delivery, 2 x USB 3.2, Audio combo, 1 x HDMI, LAN 1 Gb/s",
    },
  },
  {
    id: 8,
    name: "Laptop Gigabyte Aero X16",
    category: "laptop",
    subCategory: "gaming",
    brand: "HP",

    rating: 4.6,
    reviewCount: 35,

    price: 38690000,
    oldPrice: 40690000,
    discount: "-5%",
    quantity: 7,

    images: [
      "../assets/img/laptopgaming/laptop-gigabyte-aero-x16-1.png",
      "../assets/img/laptopgaming/laptop-gigabyte-aero-x16-2.png",
      "../assets/img/laptopgaming/laptop-gigabyte-aero-x16-3.png",
      "../assets/img/laptopgaming/laptop-gigabyte-aero-x16-4.png",
      "../assets/img/laptopgaming/laptop-gigabyte-aero-x16-5.png",
    ],

    highlightSpecs: {
      cpu: "AMD Ryzen™ AI 7 350 ( 2.0 GHz - 5.0 GHz / 16MB / 8 nhân, 16 luồng ), AMD AI",
      gpu: "AMD XDNA™ lên đến 50TOPs, GeForce RTX™ 5060 AMD Radeon™ Graphics",
      ram: "2 x 16GB DDR5 5600MHz ( 2 Khe cắm / Hỗ trợ tối đa 64GB )",
      ssd: "1TB SSD M.2 NVMe ( 2 x M.2 NVMe )",
      main: null,
      screen:
        "16 inch ( 2560 x 1600 ) WQXGA IPS , 165Hz , không cảm ứng , 400 nits , 100% sRGB",
      battery: "4 cell 76 Wh , Pin liền",
      connect: null,
      feature: null,
      layout: null,
      keycap: null,
      panel: null,
      size: null,
      hz: null,
    },

    description: {
      intro:
        "Laptop Gigabyte AERO-X16 là một sản phẩm laptop gaming cao cấp, được trang bị bộ vi xử lý AMD Ryzen AI 7 350 tích hợp NPU chuyên dụng cho các tác vụ trí tuệ nhân tạo. Sức mạnh đồ họa đến từ card GeForce RTX 5060, kết hợp cùng màn hình 16 inch WQXGA 165Hz, mang đến hiệu suất vượt trội cho cả công việc sáng tạo nội dung chuyên nghiệp và trải nghiệm chơi game đỉnh cao. Thiết kế mỏng nhẹ chỉ 1.9 kg giúp tối ưu hóa tính di động cho người dùng.",

      sections: [
        {
          title: "Thiết kế di động",
          content:
            "Với khối lượng chỉ 1.9 kg và độ mỏng dưới 2 cm, sản phẩm dễ dàng mang theo bên mình để làm việc và giải trí mọi lúc, mọi nơi.",
          image: "../assets/img/laptopgaming/laptop-gigabyte-aero-x16-5.png",
        },
        {
          title: "Vi xử lý AMD Ryzen AI 7 350",
          content:
            "Tích hợp NPU AMD XDNA lên đến 50 TOPs, cung cấp hiệu năng mạnh mẽ và khả năng xử lý các tác vụ AI thông minh, tối ưu hóa hiệu suất công việc và giải trí.",
          image: "../assets/img/laptopgaming/laptop-gigabyte-aero-x16-4.png",
        },
        {
          title: "Màn hình 16 inch WQXGA 165Hz",
          content:
            "Độ phân giải 2560 x 1600 và tần số quét cao mang lại hình ảnh chi tiết, sắc nét cùng chuyển động mượt mà, lý tưởng cho cả gaming và đồ họa chuyên nghiệp.",
          image: "../assets/img/laptopgaming/laptop-gigabyte-aero-x16-3.png",
        },
      ],
    },

    brandInfo: {
      brand: "Gigabyte",
      model: "Gigabyte Aero",
      color: "Xám",
      weight: "1.9kg",
      ports:
        "1 x USB Type C / DisplayPort / Power Delivery, 2 x USB 3.2, 1 x USB 2.0, Audio combo, 1 x HDMI, LAN 1 Gb/s",
    },
  },
  {
    id: 9,
    name: "Laptop HP Victus 16",
    category: "laptop",
    subCategory: "gaming",
    brand: "HP",

    rating: 5,
    reviewCount: 15,

    price: 33990000,
    oldPrice: 35858000,
    discount: "-5%",
    quantity: 1,

    images: [
      "../assets/img/laptopgaming/laptop-hp-victus-16-1.png",
      "../assets/img/laptopgaming/laptop-hp-victus-16-2.png",
      "../assets/img/laptopgaming/laptop-hp-victus-16-3.png",
      "../assets/img/laptopgaming/laptop-hp-victus-16-4.png",
      "../assets/img/laptopgaming/laptop-hp-victus-16-5.png",
    ],

    highlightSpecs: {
      cpu: "AMD Ryzen™ 7 7840HS ( 3.8 GHz - 5.1 GHz / 16MB / 8 nhân, 16 luồng ), AMD AI",
      gpu: "AMD Ryzen™AI up to 10 TOPs, GeForce RTX™ 4050 6GB GDDR6 194 AI TOPs ) AMD Radeon™ Graphics",
      ram: "2 x 16GB DDR5 5600MHz",
      ssd: "512GB SSD M.2 NVMe ( 1 x M.2 NVMe )",
      main: null,
      screen:
        "16.1 inch ( 1920 x 1080 ) Full HD IPS , 144Hz , 250 nits , 45% NTSC , Màn hình chống lóa",
      battery: "4 cell 70 Wh , Pin liền",
      connect: null,
      feature: null,
      layout: null,
      keycap: null,
      panel: null,
      size: null,
      hz: null,
    },

    description: {
      intro:
        "Laptop HP Victus 16 độc đáo được trang bị với CPU AMD Ryzen 7 7840HS và card đồ họa NVIDIA GeForce RTX 4050, cùng với RAM 32GB DDR5 và ổ cứng SSD 512GB NVMe PCIe, mang đến hiệu suất mạnh mẽ cho các nhu cầu đa dạng. Màn hình 16.1 inch Full HD 144Hz giúp trải nghiệm chơi game trở nên mượt mà và sống động. Với thiết kế thời trang và trọng lượng chỉ 2.3kg, laptop gaming này là sự lựa chọn tiện lợi cho việc di chuyển. Cùng với các tính năng kết nối đa dạng như Wi-Fi 6, Bluetooth 5.3, USB Type-C, HDMI, và LAN, sản phẩm này phù hợp cho game thủ, người sáng tạo nội dung, sinh viên và chuyên gia cần máy tính mạnh mẽ.",

      sections: [
        {
          title: "Thiết Kế Thời Trang, Hiệu Năng Mạnh Mẽ",
          content:
            "sở hữu thiết kế sang trọng và thanh lịch với kích thước 36.9 x 25.94 x 2.39 cm, trọng lượng chỉ 2.3kg, cùng chất liệu cao cấp. Nhờ vậy, bạn có thể dễ dàng mang theo máy bên mình mọi lúc mọi nơi. Máy có thiết kế mỏng nhẹ, giúp bạn di chuyển dễ dàng và thoải mái.",
          image: "../assets/img/laptopgaming/laptop-hp-victus-16-5.png",
        },
        {
          title:
            "Hiệu năng đột phá với CPU AMD Ryzen 7 7840HS và GPU NVIDIA GeForce RTX 4050",
          content:
            "Laptop này được trang bị CPU AMD Ryzen 7 7840HS, với 8 nhân 16 luồng, xung nhịp cơ bản 3.8 GHz và tối đa lên đến 5.1 GHz, cùng với GPU NVIDIA GeForce RTX 4050 6GB GDDR6, giúp đáp ứng nhu cầu đồ họa và gaming mạnh mẽ. RAM 32GB DDR5 với bus 5600MHz giúp đa nhiệm mượt mà, trong khi ổ cứng SSD NVMe PCIe 512GB mang lại tốc độ đọc ghi cao. Hệ điều hành được cài đặt là Windows 11 Home SL, và tính năng đặc biệt bao gồm bàn phím LED RGB 4 vùng và hệ thống tản nhiệt OMEN Tempest Cooling Technology.",
          image: "../assets/img/laptopgaming/laptop-hp-victus-16-4.png",
        },
        {
          title: " Màn hình 16.1 inch Full HD 144Hz",
          content: "giúp trải nghiệm chơi game trở nên mượt mà và sống động.",
          image: "../assets/img/laptopgaming/laptop-hp-victus-16-3.png",
        },
      ],
    },

    brandInfo: {
      brand: "HP",
      model: "HP Victus",
      color: "Đen",
      weight: "2.3kg",
      ports:
        "1 x USB Type C / DisplayPort / Power Delivery, 3 x USB 3.2, Audio combo, 1 x HDMI, LAN 1 Gb/s",
    },
  },
  {
    id: 10,
    name: "Laptop HP Omen 16",
    category: "laptop",
    subCategory: "gaming",
    brand: "HP",

    rating: 5,
    reviewCount: 36,

    price: 39290000,
    oldPrice: 40990000,
    discount: "-4%",
    quantity: 11,

    images: [
      "../assets/img/laptopgaming/laptop-hp-omen-16-1.png",
      "../assets/img/laptopgaming/laptop-hp-omen-16-2.png",
      "../assets/img/laptopgaming/laptop-hp-omen-16-3.png",
      "../assets/img/laptopgaming/laptop-hp-omen-16-4.png",
      "../assets/img/laptopgaming/laptop-hp-omen-16-5.png",
    ],

    highlightSpecs: {
      cpu: "Intel® Core™ Ultra 5-225H ( 3.3GHz - 4.9GHz / 20MB / 10 nhân, 10 luồng ), Intel AI",
      gpu: "Intel® AI Boost 13 TOPS, GeForce RTX™ 5060 8GB GDDR7 Intel® Graphics",
      ram: "2 x 8GB DDR5 5600MHz ( 2 Khe cắm / Hỗ trợ tối đa 32GB )",
      ssd: "512GB SSD M.2 NVMe ( 2 x M.2 NVMe )",
      main: null,
      screen:
        "16.1 inch ( 1920 x 1200 ) WUXGA IPS , 165Hz , không cảm ứng , 400 nits , 100% sRGB , Màn hình chống lóa",
      battery: "6 cell 83 Wh , Pin liền",
      connect: null,
      feature: null,
      layout: null,
      keycap: null,
      panel: null,
      size: null,
      hz: null,
    },

    description: {
      intro:
        "Laptop HP Omen 16 là một cỗ máy chiến game đỉnh cao, kết hợp giữa hiệu năng mạnh mẽ và thiết kế hiện đại. Sản phẩm được trang bị bộ vi xử lý Intel Core Ultra 5-225H tích hợp NPU Intel AI Boost, card đồ họa GeForce RTX 5060 8GB, cùng màn hình 16.1 inch WUXGA 165Hz siêu mượt. Đây là một chiếc laptop lý tưởng cho các game thủ chuyên nghiệp và nhà sáng tạo nội dung đòi hỏi cấu hình cao.",

      sections: [
        {
          title: " Thiết kế đậm chất Omen, hiện đại và bền bỉ",
          content:
            "Sản phẩm sở hữu thiết kế màu đen mạnh mẽ, đặc trưng của dòng Omen, với các đường nét góc cạnh và logo tối giản nhưng đầy tinh tế. Với kích thước 35.75 x 26.9 x 2.37 cm và khối lượng 2.4 kg, cỗ máy vẫn đảm bảo tính cơ động cần thiết để người dùng có thể mang theo bên mình. Khung máy chắc chắn, mang lại cảm giác bền bỉ và cao cấp.",
          image: "../assets/img/laptopgaming/laptop-hp-omen-16-5.png",
        },
        {
          title: "Hiệu năng đỉnh cao",
          content:
            "Sức mạnh đến từ CPU Intel Core Ultra 5-225H và GPU GeForce RTX 5060 8GB GDDR7, đảm bảo xử lý mượt mà mọi tựa game AAA và các tác vụ đồ họa nặng.",
          image: "../assets/img/laptopgaming/laptop-hp-omen-16-4.png",
        },
        {
          title: "Màn hình gaming chuyên nghiệp",
          content:
            "Kích thước 16.1 inch độ phân giải WUXGA, tần số quét 165Hz và độ phủ màu 100% sRGB mang đến hình ảnh sắc nét, sống động và chuyển động mượt mà.",
          image: "../assets/img/laptopgaming/laptop-hp-omen-16-3.png",
        },
      ],
    },

    brandInfo: {
      brand: "HP",
      model: "HP Omen",
      color: "Đenc",
      weight: "2.4kg",
      ports:
        "1 x USB Type C / DisplayPort / Power Delivery, 3 x USB 3.2, Audio combo, 1 x HDMI, LAN 1 Gb/s",
    },
  },
  // laptop văn phòng
  {
    id: 11,
    name: "Laptop ASUS Vivobook 15 OLED A1505VA",
    category: "laptop",
    subCategory: "vanphong",
    brand: "ASUS",

    rating: 5,
    reviewCount: 21,

    price: 18990000,
    oldPrice: 20990000,
    discount: "-10%",
    quantity: 1,

    images: [
      "../assets/img/laptop/asus-vivobook-15-oled-1.png",
      "../assets/img/laptop/asus-vivobook-15-oled-2.png",
      "../assets/img/laptop/asus-vivobook-15-oled-3.png",
      "../assets/img/laptop/asus-vivobook-15-oled-4.png",
      "../assets/img/laptop/asus-vivobook-15-oled-5.png",
    ],

    highlightSpecs: {
      cpu: "Core i5 13500H",
      gpu: "Intel Iris Xe",
      ram: "16GB",
      ssd: "512GB",
      main: null,
      screen: "15.6 inch OLED",
      battery: "50Wh",
      connect: "WiFi 6",
      feature: null,
      layout: null,
      keycap: null,
      panel: null,
      size: null,
      hz: "60Hz",
    },

    description: {
      intro:
        "ASUS Vivobook 15 OLED phù hợp cho sinh viên và dân văn phòng cần màn hình đẹp và hiệu năng ổn định.",
      sections: [
        {
          title: "Màn hình OLED rực rỡ",
          content:
            "Tấm nền OLED độ phân giải Full HD cho màu sắc sống động và độ tương phản cao.",
          image: "../assets/img/laptop/asus-vivobook-15-oled-4.png",
        },
        {
          title: "Hiệu năng mạnh mẽ",
          content:
            "CPU Intel thế hệ 13 giúp xử lý tốt các tác vụ văn phòng và học tập.",
          image: "../assets/img/laptop/asus-vivobook-15-oled-5.png",
        },
        {
          title: "Màn hình sắc nét",
          content: "Tấm nền FHD chống chói, phù hợp làm việc lâu dài.",
          image: "../assets/img/laptop/asus-vivobook-15-oled-3.png",
        },
      ],
    },

    brandInfo: {
      brand: "ASUS",
      model: "Vivobook 15 OLED",
      color: "Bạc",
      weight: "1.7kg",
      ports: "USB-C, HDMI, USB-A, Jack 3.5mm",
    },
  },
  {
    id: 12,
    name: "Laptop Dell Inspiron 15 3530",
    category: "laptop",
    subCategory: "vanphong",
    brand: "Dell",

    rating: 4,
    reviewCount: 18,

    price: 16990000,
    oldPrice: 18590000,
    discount: "-8%",
    quantity: 1,

    images: [
      "../assets/img/laptop/dell-inspiron-3530-1.png",
      "../assets/img/laptop/dell-inspiron-3530-2.png",
      "../assets/img/laptop/dell-inspiron-3530-3.png",
      "../assets/img/laptop/dell-inspiron-3530-4.png",
      "../assets/img/laptop/dell-inspiron-3530-5.png",
    ],

    highlightSpecs: {
      cpu: "Core i5 1335U",
      gpu: "Intel Iris Xe",
      ram: "16GB",
      ssd: "512GB",
      main: null,
      screen: "15.6 inch FHD",
      battery: "54Wh",
      connect: "WiFi 6",
      feature: null,
      layout: null,
      keycap: null,
      panel: null,
      size: null,
      hz: "120Hz",
    },

    description: {
      intro:
        "Dell Inspiron 15 3530 là lựa chọn ổn định cho nhân viên văn phòng và học sinh sinh viên.",
      sections: [
        {
          title: "Thiết kế bền bỉ",
          content: "Vỏ máy chắc chắn, phù hợp cho nhu cầu sử dụng lâu dài.",
          image: "../assets/img/laptop/dell-inspiron-3530-4.png",
        },
        {
          title: "Hiệu năng tiết kiệm điện",
          content: "CPU dòng U tối ưu pin và vận hành mát mẻ.",
          image: "../assets/img/laptop/dell-inspiron-3530-5.png",
        },
        {
          title: "Màn hình sắc nét",
          content: "Tấm nền FHD chống chói, phù hợp làm việc lâu dài.",
          image: "../assets/img/laptop/dell-inspiron-3530-3.png",
        },
      ],
    },

    brandInfo: {
      brand: "Dell",
      model: "Inspiron 3530",
      color: "Đen",
      weight: "1.65kg",
      ports: "USB-C, HDMI, USB-A, LAN, Jack 3.5mm",
    },
  },
  {
    id: 13,
    name: "Laptop Lenovo V14 G4 IRU 83A0000TVN",
    category: "laptop",
    subCategory: "vanphong",
    brand: "Lenovo",

    rating: 4,
    reviewCount: 10,

    price: 10490000,
    oldPrice: 11990000,
    discount: "-13%",
    quantity: 1,

    images: [
      "../assets/img/laptop/lenovo-v14-g4-iru-1.webp",
      "../assets/img/laptop/lenovo-v14-g4-iru-2.webp",
      "../assets/img/laptop/lenovo-v14-g4-iru-3.webp",
      "../assets/img/laptop/lenovo-v14-g4-iru-4.webp",
      "../assets/img/laptop/lenovo-v14-g4-iru-5.webp",
    ],

    highlightSpecs: {
      cpu: "Intel Core i3-1315U",
      gpu: "Intel UHD Graphics",
      ram: "8GB",
      ssd: "512GB",
      screen: "14 inch FHD IPS",
      battery: "38Wh",
      connect: "Wi-Fi 6",
      hz: "60Hz",
    },

    description: {
      intro:
        "Lenovo V14 G4 IRU là laptop văn phòng giá tốt, xử lý tốt các tác vụ Word, Excel cũng như lướt web và họp online.",
      sections: [
        {
          title: "Thiết kế chuyên nghiệp",
          content:
            "Vỏ nhựa tinh tế, trọng lượng nhẹ 1.43kg thuận tiện mang theo mỗi ngày.",
          image: "../assets/img/laptop/lenovo-v14-g4-iru-1.webp",
        },
        {
          title: "Màn hình sắc nét",
          content: "14 inch FHD IPS cho màu sắc tươi sáng và góc nhìn rộng.",
          image: "../assets/img/laptop/lenovo-v14-g4-iru-3.webp",
        },
        {
          title: "Hiệu năng ổn định",
          content:
            "CPU Intel Core i3 và SSD 512GB giúp khởi động nhanh và xử lý mượt các tác vụ văn phòng.",
          image: "../assets/img/laptop/lenovo-v14-g4-iru-4.webp",
        },
      ],
    },

    brandInfo: {
      brand: "Lenovo",
      model: "V14 G4 IRU 83A0000TVN",
      color: "Iron Grey",
      weight: "1.43kg",
      ports: "USB-C, HDMI, USB-A, RJ45, Jack 3.5mm",
    },
  },
  {
    id: 14,
    name: "Laptop Lenovo V14 G4 IAH 83FR000UVN",
    category: "laptop",
    subCategory: "vanphong",
    brand: "Lenovo",

    rating: 4,
    reviewCount: 8,

    price: 11990000,
    oldPrice: 17290000,
    discount: "-31%",
    quantity: 1,

    images: [
      "../assets/img/laptop/lenovo-v14-g4-iah-1.jpg",
      "../assets/img/laptop/lenovo-v14-g4-iah-2.jpg",
      "../assets/img/laptop/lenovo-v14-g4-iah-3.jpg",
      "../assets/img/laptop/lenovo-v14-g4-iah-4.jpg",
      "../assets/img/laptop/lenovo-v14-g4-iah-5.jpg",
    ],

    highlightSpecs: {
      cpu: "Intel Core i5-12500H",
      gpu: "Intel Iris Xe",
      ram: "16GB",
      ssd: "512GB",
      screen: "14 inch FHD IPS",
      battery: "38Wh",
      connect: "Wi-Fi 6",
      hz: "60Hz",
    },

    description: {
      intro:
        "Lenovo V14 G4 IAH là phiên bản cao cấp hơn trong dòng V14 G4, thích hợp cho công việc đa nhiệm và văn phòng nâng cao.",
      sections: [
        {
          title: "Hiệu năng mạnh mẽ",
          content:
            "Bộ xử lý Intel Core i5 kết hợp 16GB RAM xử lý tốt đa nhiệm văn phòng.",
          image: "../assets/img/laptop/lenovo-v14-g4-iah-2.jpg",
        },
        {
          title: "Thiết kế gọn nhẹ",
          content:
            "Trọng lượng nhẹ dễ dàng mang theo đến văn phòng và gặp khách hàng.",
          image: "../assets/img/laptop/lenovo-v14-g4-iah-3.jpg",
        },
        {
          title: "Lưu trữ nhanh",
          content:
            "SSD 512GB cho tốc độ phản hồi ứng dụng nhanh và không gian lưu trữ rộng.",
          image: "../assets/img/laptop/lenovo-v14-g4-iah-4.jpg",
        },
      ],
    },

    brandInfo: {
      brand: "Lenovo",
      model: "V14 G4 IAH 83FR000UVN",
      color: "Black",
      weight: "1.43kg",
      ports: "USB-C, HDMI, USB-A, RJ45, Jack 3.5mm",
    },
  },
  {
    id: 15,
    name: "Laptop Lenovo IdeaPad Slim 3 15IRH10 83K1000GVN",
    category: "laptop",
    subCategory: "vanphong",
    brand: "Lenovo",

    rating: 5,
    reviewCount: 14,
    price: 15990000,
    oldPrice: 17490000,
    discount: "-9%",
    quantity: 1,

    images: [
      "../assets/img/laptop/lenovo-ideapad-slim3-1.webp",
      "../assets/img/laptop/lenovo-ideapad-slim3-2.webp",
      "../assets/img/laptop/lenovo-ideapad-slim3-3.webp",
      "../assets/img/laptop/lenovo-ideapad-slim3-4.webp",
      "../assets/img/laptop/lenovo-ideapad-slim3-5.webp",
    ],

    highlightSpecs: {
      cpu: "Intel Core i5-13420H",
      gpu: "Intel UHD",
      ram: "8GB+16GB",
      ssd: "512GB",
      screen: "15.3 inch WUXGA",
      battery: "45Wh",
      connect: "Wi-Fi 6",
      hz: "60Hz",
    },

    description: {
      intro:
        "Lenovo IdeaPad Slim 3 là lựa chọn văn phòng mạnh hơn với màn lớn và cấu hình đa nhiệm.",

      sections: [
        {
          title: "Màn hình lớn",
          content: "15.3 inch WUXGA cho không gian làm việc thoải mái.",
          image: "../assets/img/laptop/lenovo-ideapad-slim3-2.webp",
        },
        {
          title: "Hiệu năng cân bằng",
          content: "Intel i5 và RAM lớn giúp xử lý nhiều ứng dụng cùng lúc.",
          image: "../assets/img/laptop/lenovo-ideapad-slim3-3.webp",
        },
        {
          title: "Thiết kế mỏng nhẹ",
          content: "Máy gọn nhẹ, dễ dàng mang đi học và đi làm.",
          image: "../assets/img/laptop/lenovo-ideapad-slim3-4.webp",
        },
      ],
    },

    brandInfo: {
      brand: "Lenovo",
      model: "IdeaPad Slim 3 15IRH10 83K1000GVN",
      color: "Gray",
      weight: "1.7kg",
      ports: "USB-C, HDMI, USB-A",
    },
  },
  {
    id: 16,
    name: "Laptop Acer Aspire 5 A515-58P-71EJ",
    category: "laptop",
    subCategory: "vanphong",
    brand: "Acer",

    rating: 5,
    reviewCount: 22,

    price: 20190000,
    oldPrice: 20490000,
    discount: "-1%",
    quantity: 1,

    images: [
      "../assets/img/laptop/acer-aspire-5-a515-58p-71ej-1.png",
      "../assets/img/laptop/acer-aspire-5-a515-58p-71ej-2.png",
      "../assets/img/laptop/acer-aspire-5-a515-58p-71ej-3.png",
      "../assets/img/laptop/acer-aspire-5-a515-58p-71ej-4.png",
      "../assets/img/laptop/acer-aspire-5-a515-58p-71ej-5.png",
    ],

    highlightSpecs: {
      cpu: "Intel Core i7-13620H",
      gpu: "Intel UHD Graphics",
      ram: "16GB",
      ssd: "1TB",
      screen: "15.6 inch FHD IPS",
      battery: "48Wh",
      connect: "Wi-Fi 6",
      hz: "60Hz",
    },

    description: {
      intro:
        "Acer Aspire 5 A515-58P-71EJ là mẫu văn phòng hiệu năng mạnh mẽ với CPU Gen 13, xử lý đa nhiệm tốt, phù hợp học tập, họp online và làm việc dài ngày.",
      sections: [
        {
          title: "CPU Core i7 mạnh mẽ",
          content:
            "Intel Core i7 thế hệ mới xử lý đa nhiệm nhanh chóng, đáp ứng tốt Word, Excel và các ứng dụng văn phòng.",
          image: "../assets/img/laptop/acer-aspire-5-a515-58p-71ej-2.png",
        },
        {
          title: "Lưu trữ lớn 1TB",
          content:
            "Ổ SSD 1TB cho không gian lưu trữ dư dả tài liệu, slide và dữ liệu dự án.",
          image: "../assets/img/laptop/acer-aspire-5-a515-58p-71ej-3.png",
        },
        {
          title: "Màn hình IPS sắc nét",
          content:
            "Màn hình Full HD với tấm nền IPS giúp hiển thị màu sắc tốt và chống mỏi mắt khi làm việc lâu.",
          image: "../assets/img/laptop/acer-aspire-5-a515-58p-71ej-4.png",
        },
      ],
    },

    brandInfo: {
      brand: "Acer",
      model: "Aspire 5 A515-58P-71EJ",
      color: "Silver",
      weight: "1.7kg",
      ports: "USB-C, USB-A, HDMI, Jack 3.5mm",
    },
  },
  {
    id: 17,
    name: "Laptop Acer Aspire 5 A514-55-5954",
    category: "laptop",
    subCategory: "vanphong",
    brand: "Acer",

    rating: 4,
    reviewCount: 15,

    price: 14490000,
    oldPrice: 15990000,
    discount: "-9%",
    quantity: 1,

    images: [
      "../assets/img/laptop/acer-aspire-5-a514-55-5954-1.png",
      "../assets/img/laptop/acer-aspire-5-a514-55-5954-2.png",
      "../assets/img/laptop/acer-aspire-5-a514-55-5954-3.png",
      "../assets/img/laptop/acer-aspire-5-a514-55-5954-4.png",
      "../assets/img/laptop/acer-aspire-5-a514-55-5954-5.png",
    ],

    highlightSpecs: {
      cpu: "Intel Core i5-1135G7",
      gpu: "Intel Iris Xe Graphics",
      ram: "8GB",
      ssd: "512GB",
      screen: "14 inch FHD IPS",
      battery: "48Wh",
      connect: "Wi-Fi 6",
      hz: "60Hz",
    },

    description: {
      intro:
        "Acer Aspire 5 A514-55-5954 là lựa chọn laptop văn phòng & học tập nhẹ nhàng với màn 14 inch sắc nét và thiết kế gọn nhẹ.",
      sections: [
        {
          title: "Thiết kế mỏng nhẹ",
          content: "Trọng lượng khoảng 1.4kg, dễ bỏ balo đi làm hoặc học.",
          image: "../assets/img/laptop/acer-aspire-5-a514-55-5954-2.png",
        },
        {
          title: "Hiệu năng ổn định",
          content:
            "CPU i5 cùng RAM 8GB xử lý tốt đa nhiệm cơ bản cho công việc văn phòng.",
          image: "../assets/img/laptop/acer-aspire-5-a514-55-5954-3.png",
        },
        {
          title: "Màn hình chống chói",
          content:
            "IPS Full HD hiển thị sắc nét và chống mỏi mắt khi làm việc lâu.",
          image: "../assets/img/laptop/acer-aspire-5-a514-55-5954-4.png",
        },
      ],
    },

    brandInfo: {
      brand: "Acer",
      model: "Aspire 5 A514-55-5954",
      color: "Silver",
      weight: "1.4kg",
      ports: "USB-C, USB-A, HDMI, Jack 3.5mm",
    },
  },
  {
    id: 18,
    name: "Laptop ASUS Zenbook 14 OLED UX3405MA PP475W",
    category: "laptop",
    subCategory: "vanphong",
    brand: "ASUS",

    rating: 5,
    reviewCount: 14,

    price: 34990000,
    oldPrice: 36990000,
    discount: "-5%",
    quantity: 1,

    images: [
      "../assets/img/laptop/asus-zenbook-14-oled-ux3405ma-1.webp",
      "../assets/img/laptop/asus-zenbook-14-oled-ux3405ma-2.webp",
      "../assets/img/laptop/asus-zenbook-14-oled-ux3405ma-3.webp",
      "../assets/img/laptop/asus-zenbook-14-oled-ux3405ma-4.webp",
      "../assets/img/laptop/asus-zenbook-14-oled-ux3405ma-5.webp",
    ],

    highlightSpecs: {
      cpu: "Intel Core i5-1335U",
      gpu: "Intel Iris Xe Graphics",
      ram: "32GB",
      ssd: "512GB",
      screen: "14 inch OLED",
      battery: "50Wh",
      connect: "Wi-Fi 6",
      hz: "60Hz",
    },

    description: {
      intro:
        "ASUS Zenbook 14 OLED là dòng laptop văn phòng cao cấp với màn hình OLED sắc nét và hiệu năng mạnh mẽ, phù hợp cho đa nhiệm, họp online và đồ họa nhẹ.",
      sections: [
        {
          title: "Màn hình OLED đẹp",
          content:
            "Tấm nền OLED cho màu sắc sống động, chống mỏi mắt khi làm việc lâu.",
          image: "../assets/img/laptop/asus-zenbook-14-oled-ux3405ma-2.webp",
        },
        {
          title: "Hiệu năng mạnh mẽ",
          content:
            "CPU Intel thế hệ mới kết hợp RAM lớn giúp xử lý đa nhiệm văn phòng hiệu quả.",
          image: "../assets/img/laptop/asus-zenbook-14-oled-ux3405ma-3.webp",
        },
        {
          title: "Thiết kế mỏng nhẹ",
          content: "Trọng lượng nhẹ dễ dàng mang theo đến công ty hay lớp học.",
          image: "../assets/img/laptop/asus-zenbook-14-oled-ux3405ma-4.webp",
        },
      ],
    },

    brandInfo: {
      brand: "ASUS",
      model: "Zenbook 14 OLED UX3405MA PP475W",
      color: "Silver",
      weight: "1.2kg",
      ports: "USB-C, USB-A, HDMI, Jack 3.5mm",
    },
  },
  {
    id: 19,
    name: "Laptop ASUS Zenbook UX425EA KI839W",
    category: "laptop",
    subCategory: "vanphong",
    brand: "ASUS",

    rating: 4,
    reviewCount: 19,

    price: 19990000,
    oldPrice: 23990000,
    discount: "-17%",
    quantity: 1,

    images: [
      "../assets/img/laptop/asus-zenbook-ux425ea-1.png",
      "../assets/img/laptop/asus-zenbook-ux425ea-2.png",
      "../assets/img/laptop/asus-zenbook-ux425ea-3.png",
      "../assets/img/laptop/asus-zenbook-ux425ea-4.png",
      "../assets/img/laptop/asus-zenbook-ux425ea-5.png",
    ],

    highlightSpecs: {
      cpu: "Intel Core i5-1135G7",
      gpu: "Intel Iris Xe",
      ram: "8GB",
      ssd: "512GB",
      screen: "14 inch FHD IPS",
      battery: "50Wh",
      connect: "Wi-Fi 6",
      hz: "60Hz",
    },

    description: {
      intro:
        "ASUS Zenbook UX425EA là mẫu ultrabook nhẹ & linh hoạt, phù hợp cho công việc văn phòng, họp trực tuyến và đi công tác.",
      sections: [
        {
          title: "Hiệu năng ổn định",
          content:
            "CPU i5 cùng SSD 512GB giúp xử lý mượt các tác vụ văn phòng.",
          image: "../assets/img/laptop/asus-zenbook-ux425ea-2.png",
        },
        {
          title: "Thiết kế siêu mỏng",
          content:
            "Máy rất mỏng và nhẹ, lý tưởng cho người phải di chuyển nhiều.",
          image: "../assets/img/laptop/asus-zenbook-ux425ea-3.png",
        },
        {
          title: "Kết nối đầy đủ",
          content:
            "Trang bị cổng USB-C, HDMI và Thunderbolt 4 thuận tiện kết nối ngoại vi.",
          image: "../assets/img/laptop/asus-zenbook-ux425ea-4.png",
        },
      ],
    },

    brandInfo: {
      brand: "ASUS",
      model: "Zenbook UX425EA KI839W",
      color: "Silver",
      weight: "1.17kg",
      ports: "Thunderbolt 4, USB-C, HDMI, Jack 3.5mm",
    },
  },
  {
    id: 20,
    name: "Laptop Dell Latitude 3520 P108F001 70280538",
    category: "laptop",
    subCategory: "vanphong",
    brand: "Dell",

    rating: 4,
    reviewCount: 12,

    price: 19990000,
    oldPrice: 24990000,
    discount: "-20%",
    quantity: 1,

    images: [
      "../assets/img/laptop/dell-latitude-3520-1.png",
      "../assets/img/laptop/dell-latitude-3520-2.png",
      "../assets/img/laptop/dell-latitude-3520-3.png",
      "../assets/img/laptop/dell-latitude-3520-4.png",
      "../assets/img/laptop/dell-latitude-3520-5.png",
    ],

    highlightSpecs: {
      cpu: "Intel Core i7-1165G7",
      gpu: "Intel Iris Xe Graphics",
      ram: "8GB",
      ssd: "256GB",
      screen: "15.6 inch FHD IPS",
      battery: "41Wh",
      connect: "Wi-Fi 6",
      hz: "60Hz",
    },

    description: {
      intro:
        "Dell Latitude 3520 là dòng laptop văn phòng bền bỉ, hiệu năng ổn định và thiết kế tối giản, phù hợp nhân viên văn phòng và doanh nhân.",
      sections: [
        {
          title: "Hiệu năng cân bằng",
          content:
            "CPU i7 cùng card tích hợp xử lý tốt Word, Excel và đa nhiệm nhẹ nhàng.",
          image: "../assets/img/laptop/dell-latitude-3520-2.png",
        },
        {
          title: "Thiết kế chuyên nghiệp",
          content:
            "Vỏ máy sang trọng, phù hợp môi trường kinh doanh chuyên nghiệp.",
          image: "../assets/img/laptop/dell-latitude-3520-3.png",
        },
        {
          title: "Màn hình rộng",
          content: "15.6 inch FHD cho không gian làm việc thoải mái.",
          image: "../assets/img/laptop/dell-latitude-3520-4.png",
        },
      ],
    },

    brandInfo: {
      brand: "Dell",
      model: "Latitude 3520 P108F001 70280538",
      color: "Carbon Black",
      weight: "1.79kg",
      ports: "USB-C, USB-A, HDMI, RJ45, Card Reader",
    },
  },
  //PC
  {
    id: 21,
    name: "PC GVN Intel Core Ultra 7 265F/ VGA RTX 5070Ti",
    category: "pc",
    subCategory: "",
    brand: "Acer",

    rating: 5,
    reviewCount: 15,

    price: 35400000,
    oldPrice: 38900000,
    discount: "-9%",
    quantity: 1,

    images: [
      "../assets/img/pc/pc-gvn-01.jpg",
      "../assets/img/pc/pc-gvn-02.jpg",
      "../assets/img/pc/pc-gvn-03.jpg",
      "../assets/img/pc/pc-gvn-04.jpg",
      "../assets/img/pc/pc-gvn-05.jpg",
    ],

    highlightSpecs: {
      cpu: "Intel Core i9-14900K (14th Gen)",
      gpu: "NVIDIA GeForce RTX 5080 16GB",
      ram: "64GB DDR5",
      ssd: "1TB NVMe SSD",
      main: "Z790",
      screen: null,
      battery: null,
      connect: null,
      feature: null,
      layout: null,
      keycap: null,
      panel: null,
      size: null,
      hz: null,
    },

    description: {
      intro:
        "Acer Swift X14 là dòng laptop mỏng nhẹ hiệu năng cao dành cho sinh viên và designer.",

      sections: [
        {
          title: "Thiết kế cao cấp, mỏng nhẹ",
          content:
            "Khung nhôm nguyên khối sang trọng, trọng lượng chỉ 1.5kg, dễ dàng mang theo.",
          image: "../assets/img/pc/pc-gvn-01.jpg",
        },
        {
          title: "Hiệu năng mạnh mẽ",
          content:
            "Trang bị CPU Ultra 7 và RTX 4050 giúp xử lý đồ họa và gaming mượt mà.",
          image: "../assets/img/pc/pc-gvn-02.jpg",
        },
        {
          title: "Màn hình OLED sắc nét",
          content:
            "Độ phân giải 2.8K, màu sắc chính xác cao phù hợp cho công việc sáng tạo.",
          image: "../assets/img/pc/pc-gvn-03.jpg",
        },
      ],
    },

    brandInfo: {
      brand: "Acer",
      model: "Swift X14",
      color: "Bạc",
      weight: "1.5kg",
      ports: "USB-C, HDMI, USB-A, Jack 3.5mm",
    },
  },
  {
    id: 22,
    name: "PC ASUS Intel Core i5 / GTX 1660",
    category: "pc",
    subCategory: "",
    brand: "ASUS",
    rating: 4,
    reviewCount: 10,
    price: 15000000,
    oldPrice: 16000000,
    discount: "-6%",
    quantity: 1,
    images: [
      "../assets/img/pc/ASUS-1.jpg",
      "../assets/img/pc/ASUS-2.jpg",
      "../assets/img/pc/ASUS-3.jpg",
      "../assets/img/pc/ASUS-4.jpg",
      "../assets/img/pc/ASUS-5.jpg",
    ],
    highlightSpecs: {
      cpu: "Intel Core i5 (12th Gen)",
      gpu: "NVIDIA GeForce GTX 1660 6GB",
      ram: "16GB DDR4",
      ssd: "512GB NVMe SSD",
      main: "B560",
      screen: null,
      battery: null,
      connect: null,
      feature: null,
      layout: null,
      keycap: null,
      panel: null,
      size: null,
      hz: null,
    },
    description: {
      intro:
        "Dòng PC hiệu năng cao, thiết kế bền bỉ phù hợp cho gaming, đồ họa và làm việc.",
      sections: [
        {
          title: "Case thiết kế hiện đại",
          content:
            "Thùng máy với kiểu dáng công nghiệp, đảm bảo thoáng khí và dễ nâng cấp.",
          image: "../assets/img/pc/ASUS-1.jpg",
        },
        {
          title: "Bộ xử lý mạnh mẽ",
          content:
            "Trang bị CPU đời mới, xử lý đa nhiệm và các tác vụ nặng mượt mà.",
          image: "../assets/img/pc/ASUS-2.jpg",
        },
        {
          title: "Tản nhiệt hiệu quả",
          content:
            "Hệ thống quạt và tản nhiệt chất lượng cao giữ máy mát trong thời gian dài.",
          image: "../assets/img/pc/ASUS-3.jpg",
        },
      ],
    },
    brandInfo: {
      brand: "PC World",
      model: "Custom Build",
      color: "Đa dạng",
      weight: "Tùy cấu hình",
      ports: "USB, HDMI, DisplayPort, Ethernet",
    },
  },
  {
    id: 23,
    name: "PC Lenovo Intel Core i5 / GTX 1650",
    category: "pc",
    subCategory: "",
    brand: "Lenovo",
    rating: 4,
    reviewCount: 8,
    price: 14000000,
    oldPrice: 15000000,
    discount: "-7%",
    quantity: 1,
    images: [
      "../assets/img/pc/PC Lenovo-1.jpg",
      "../assets/img/pc/PC Lenovo-2.jpg",
      "../assets/img/pc/PC Lenovo-3.jpg",
      "../assets/img/pc/PC Lenovo-4.jpg",
      "../assets/img/pc/PC Lenovo-5.jpg",
    ],
    highlightSpecs: {
      cpu: "Intel Core i5 (11th Gen)",
      gpu: "NVIDIA GeForce GTX 1650 4GB",
      ram: "8GB DDR4",
      ssd: "256GB SSD",
      main: "B460",
      screen: null,
      battery: null,
      connect: null,
      feature: null,
      layout: null,
      keycap: null,
      panel: null,
      size: null,
      hz: null,
    },
    description: {
      intro:
        "Dòng PC hiệu năng cao, thiết kế bền bỉ phù hợp cho gaming, đồ họa và làm việc.",
      sections: [
        {
          title: "Case thiết kế hiện đại",
          content:
            "Thùng máy với kiểu dáng công nghiệp, đảm bảo thoáng khí và dễ nâng cấp.",
          image: "../assets/img/pc/tải xuống (2).jpg",
        },
        {
          title: "Bộ xử lý mạnh mẽ",
          content:
            "Trang bị CPU đời mới, xử lý đa nhiệm và các tác vụ nặng mượt mà.",
          image: "../assets/img/pc/tải xuống (2).jpg",
        },
        {
          title: "Tản nhiệt hiệu quả",
          content:
            "Hệ thống quạt và tản nhiệt chất lượng cao giữ máy mát trong thời gian dài.",
          image: "../assets/img/pc/tải xuống (2).jpg",
        },
      ],
    },
    brandInfo: {
      brand: "PC World",
      model: "Custom Build",
      color: "Đa dạng",
      weight: "Tùy cấu hình",
      ports: "USB, HDMI, DisplayPort, Ethernet",
    },
  },
  {
    id: 24,
    name: "PC HP Intel Core i7 / RTX 2070",
    category: "pc",
    subCategory: "",
    brand: "HP",
    rating: 5,
    reviewCount: 12,
    price: 20000000,
    oldPrice: 36363636,
    discount: "-18%",
    quantity: 1,
    images: [
      "../assets/img/pc/PC HP-1.jpg",
      "../assets/img/pc/PC HP-2.jpg",
      "../assets/img/pc/PC HP-3.jpg",
      "../assets/img/pc/PC HP-4.jpg",
      "../assets/img/pc/PC HP-5.jpg",
    ],
    highlightSpecs: {
      cpu: "Intel Core i7 (9th Gen)",
      gpu: "NVIDIA GeForce RTX 2070 8GB",
      ram: "16GB DDR4",
      ssd: "1TB SSD",
      main: "Z490",
      screen: null,
      battery: null,
      connect: null,
      feature: null,
      layout: null,
      keycap: null,
      panel: null,
      size: null,
      hz: null,
    },
    description: {
      intro:
        "Dòng PC hiệu năng cao, thiết kế bền bỉ phù hợp cho gaming, đồ họa và làm việc.",
      sections: [
        {
          title: "Case thiết kế hiện đại",
          content:
            "Thùng máy với kiểu dáng công nghiệp, đảm bảo thoáng khí và dễ nâng cấp.",
          image: "../assets/img/pc/PC HP-1.jpg",
        },
        {
          title: "Bộ xử lý mạnh mẽ",
          content:
            "Trang bị CPU đời mới, xử lý đa nhiệm và các tác vụ nặng mượt mà.",
          image: "../assets/img/pc/PC HP-2.jpg",
        },
        {
          title: "Tản nhiệt hiệu quả",
          content:
            "Hệ thống quạt và tản nhiệt chất lượng cao giữ máy mát trong thời gian dài.",
          image: "../assets/img/pc/PC HP-3.jpg",
        },
      ],
    },
    brandInfo: {
      brand: "PC World",
      model: "Custom Build",
      color: "Đa dạng",
      weight: "Tùy cấu hình",
      ports: "USB, HDMI, DisplayPort, Ethernet",
    },
  },
  {
    id: 25,
    name: "PC Dell Intel Core i3 / GTX 1050",
    category: "pc",
    subCategory: "",
    brand: "Brand4",
    rating: 3,
    reviewCount: 5,
    price: 12000000,
    oldPrice: 13000000,
    discount: "-8%",
    quantity: 1,
    images: [
      "../assets/img/pc/PC Dell-1.jpg",
      "../assets/img/pc/PC Dell-2.jpg",
      "../assets/img/pc/PC Dell-3.jpg",
      "../assets/img/pc/PC Dell-4.jpg",
      "../assets/img/pc/PC Dell-5.jpg",
    ],
    highlightSpecs: {
      cpu: "Intel Core i3 (10th Gen)",
      gpu: "NVIDIA GeForce GTX 1050 2GB",
      ram: "8GB DDR4",
      ssd: "256GB SSD",
      main: "H410",
      screen: null,
      battery: null,
      connect: null,
      feature: null,
      layout: null,
      keycap: null,
      panel: null,
      size: null,
      hz: null,
    },
    description: {
      intro:
        "Acer Swift X14 là dòng laptop mỏng nhẹ hiệu năng cao dành cho sinh viên và designer.",
      sections: [
        {
          title: "Thiết kế cao cấp, mỏng nhẹ",
          content:
            "Khung nhôm nguyên khối sang trọng, trọng lượng chỉ 1.5kg, dễ dàng mang theo.",
          image: "../assets/img/pc/PC Dell-1.jpg",
        },
        {
          title: "Hiệu năng mạnh mẽ",
          content:
            "Trang bị CPU Ultra 7 và RTX 4050 giúp xử lý đồ họa và gaming mượt mà.",
          image: "../assets/img/pc/PC Dell-2.jpg",
        },
        {
          title: "Màn hình OLED sắc nét",
          content:
            "Độ phân giải 2.8K, màu sắc chính xác cao phù hợp cho công việc sáng tạo.",
          image: "../assets/img/pc/PC Dell-3.jpg",
        },
      ],
    },
    brandInfo: {
      brand: "Acer",
      model: "Swift X14",
      color: "Bạc",
      weight: "1.5kg",
      ports: "USB-C, HDMI, USB-A, Jack 3.5mm",
    },
  },
  {
    id: 26,
    name: "PC MSI  Intel Core i5 / GTX 1660 Ti",
    category: "pc",
    subCategory: "",
    brand: "MSI",
    rating: 4,
    reviewCount: 9,
    price: 16000000,
    oldPrice: 17500000,
    discount: "-8%",
    quantity: 1,
    images: [
      "../assets/img/pc/PC MSI-1.jpg",
      "../assets/img/pc/PC MSI-2.jpg",
      "../assets/img/pc/PC MSI-3.jpg",
      "../assets/img/pc/PC MSI-4.jpg",
      "../assets/img/pc/PC MSI-5.jpg",
    ],
    highlightSpecs: {
      cpu: "Intel Core i5 (12th Gen)",
      gpu: "NVIDIA GeForce GTX 1660 Ti 6GB",
      ram: "16GB DDR4",
      ssd: "512GB NVMe SSD",
      main: "B560",
      screen: null,
      battery: null,
      connect: null,
      feature: null,
      layout: null,
      keycap: null,
      panel: null,
      size: null,
      hz: null,
    },
    description: {
      intro:
        "Acer Swift X14 là dòng laptop mỏng nhẹ hiệu năng cao dành cho sinh viên và designer.",
      sections: [
        {
          title: "Thiết kế cao cấp, mỏng nhẹ",
          content:
            "Khung nhôm nguyên khối sang trọng, trọng lượng chỉ 1.5kg, dễ dàng mang theo.",
          image: "../assets/img/pc/PC MSI-1.jpg",
        },
        {
          title: "Hiệu năng mạnh mẽ",
          content:
            "Trang bị CPU Ultra 7 và RTX 4050 giúp xử lý đồ họa và gaming mượt mà.",
          image: "../assets/img/pc/PC MSI-2.jpg",
        },
        {
          title: "Màn hình OLED sắc nét",
          content:
            "Độ phân giải 2.8K, màu sắc chính xác cao phù hợp cho công việc sáng tạo.",
          image: "../assets/img/pc/PC MSI-3.jpg",
        },
      ],
    },
    brandInfo: {
      brand: "Acer",
      model: "Swift X14",
      color: "Bạc",
      weight: "1.5kg",
      ports: "USB-C, HDMI, USB-A, Jack 3.5mm",
    },
  },
  {
    id: 27,
    name: "PC Acer Intel Core i7 / RTX 3060",
    category: "pc",
    subCategory: "",
    brand: "Acer",
    rating: 5,
    reviewCount: 14,
    price: 22000000,
    oldPrice: 24500000,
    discount: "-10%",
    quantity: 1,
    images: [
      "../assets/img/pc/PC Acer-1.jpg",
      "../assets/img/pc/PC Acer-2.jpg",
      "../assets/img/pc/PC Acer-3.jpg",
      "../assets/img/pc/PC Acer-4.jpg",
      "../assets/img/pc/PC Acer-5.jpg",
    ],
    highlightSpecs: {
      cpu: "Intel Core i7 (11th Gen)",
      gpu: "NVIDIA GeForce RTX 3060 12GB",
      ram: "16GB DDR4",
      ssd: "1TB SSD",
      main: "Z590",
      screen: null,
      battery: null,
      connect: null,
      feature: null,
      layout: null,
      keycap: null,
      panel: null,
      size: null,
      hz: null,
    },
    description: {
      intro:
        "Acer Swift X14 là dòng laptop mỏng nhẹ hiệu năng cao dành cho sinh viên và designer.",
      sections: [
        {
          title: "Thiết kế cao cấp, mỏng nhẹ",
          content:
            "Khung nhôm nguyên khối sang trọng, trọng lượng chỉ 1.5kg, dễ dàng mang theo.",
          image: "../assets/img/pc/PC Acer-1.jpg",
        },
        {
          title: "Hiệu năng mạnh mẽ",
          content:
            "Trang bị CPU Ultra 7 và RTX 4050 giúp xử lý đồ họa và gaming mượt mà.",
          image: "../assets/img/pc/PC Acer-2.jpg",
        },
        {
          title: "Màn hình OLED sắc nét",
          content:
            "Độ phân giải 2.8K, màu sắc chính xác cao phù hợp cho công việc sáng tạo.",
          image: "../assets/img/pc/PC Acer-3.jpg",
        },
      ],
    },
    brandInfo: {
      brand: "Acer",
      model: "Swift X14",
      color: "Bạc",
      weight: "1.5kg",
      ports: "USB-C, HDMI, USB-A, Jack 3.5mm",
    },
  },
  {
    id: 28,
    name: "PC Gigabyte Intel Core i5 / RTX 2060",
    category: "pc",
    subCategory: "",
    brand: "Gigabyte",
    rating: 4,
    reviewCount: 11,
    price: 18000000,
    oldPrice: 19500000,
    discount: "-8%",
    quantity: 1,
    images: [
      "../assets/img/pc/PC Gigabyte-1.jpg",
      "../assets/img/pc/PC Gigabyte-2.jpg",
      "../assets/img/pc/PC Gigabyte-3.jpg",
      "../assets/img/pc/PC Gigabyte-4.jpg",
      "../assets/img/pc/PC Gigabyte-5.jpg",
    ],
    highlightSpecs: {
      cpu: "Intel Core i5 (10th Gen)",
      gpu: "NVIDIA GeForce RTX 2060 6GB",
      ram: "16GB DDR4",
      ssd: "512GB NVMe SSD",
      main: "B560",
      screen: null,
      battery: null,
      connect: null,
      feature: null,
      layout: null,
      keycap: null,
      panel: null,
      size: null,
      hz: null,
    },
    description: {
      intro:
        "Dòng PC hiệu năng cao, thiết kế bền bỉ phù hợp cho gaming, đồ họa và làm việc.",
      sections: [
        {
          title: "Case thiết kế hiện đại",
          content:
            "Thùng máy với kiểu dáng công nghiệp, đảm bảo thoáng khí và dễ nâng cấp.",
          image: "../assets/img/pc/PC Gigabyte-1.jpg",
        },
        {
          title: "Bộ xử lý mạnh mẽ",
          content:
            "Trang bị CPU đời mới, xử lý đa nhiệm và các tác vụ nặng mượt mà.",
          image: "../assets/img/pc/PC Gigabyte-2.jpg",
        },
        {
          title: "Tản nhiệt hiệu quả",
          content:
            "Hệ thống quạt và tản nhiệt chất lượng cao giữ máy mát trong thời gian dài.",
          image: "../assets/img/pc/PC Gigabyte-3.jpg",
        },
      ],
    },
    brandInfo: {
      brand: "PC World",
      model: "Custom Build",
      color: "Đa dạng",
      weight: "Tùy cấu hình",
      ports: "USB, HDMI, DisplayPort, Ethernet",
    },
  },
  {
    id: 29,
    name: "PC Razer Intel Core i3 / GTX 1050 Ti",
    category: "pc",
    subCategory: "",
    brand: "Razer",
    rating: 3,
    reviewCount: 7,
    price: 13000000,
    oldPrice: 14000000,
    discount: "-7%",
    quantity: 1,
    images: [
      "../assets/img/pc/PC Razer-1.jpg",
      "../assets/img/pc/PC Razer-2.jpg",
      "../assets/img/pc/PC Razer-3.jpg",
      "../assets/img/pc/PC Razer-4.jpg",
      "../assets/img/pc/PC Razer-5.jpg",
    ],
    highlightSpecs: {
      cpu: "Intel Core i3 (10th Gen)",
      gpu: "NVIDIA GeForce GTX 1050 Ti 4GB",
      ram: "8GB DDR4",
      ssd: "256GB SSD",
      main: "H410",
      screen: null,
      battery: null,
      connect: null,
      feature: null,
      layout: null,
      keycap: null,
      panel: null,
      size: null,
      hz: null,
    },
    description: {
      intro:
        "Dòng PC hiệu năng cao, thiết kế bền bỉ phù hợp cho gaming, đồ họa và làm việc.",
      sections: [
        {
          title: "Case thiết kế hiện đại",
          content:
            "Thùng máy với kiểu dáng công nghiệp, đảm bảo thoáng khí và dễ nâng cấp.",
          image: "../assets/img/pc/PC Razer-1.jpg",
        },
        {
          title: "Bộ xử lý mạnh mẽ",
          content:
            "Trang bị CPU đời mới, xử lý đa nhiệm và các tác vụ nặng mượt mà.",
          image: "../assets/img/pc/PC Razer-2.jpg",
        },
        {
          title: "Tản nhiệt hiệu quả",
          content:
            "Hệ thống quạt và tản nhiệt chất lượng cao giữ máy mát trong thời gian dài.",
          image: "../assets/img/pc/PC Razer-3.jpg",
        },
      ],
    },
    brandInfo: {
      brand: "PC World",
      model: "Custom Build",
      color: "Đa dạng",
      weight: "Tùy cấu hình",
      ports: "USB, HDMI, DisplayPort, Ethernet",
    },
  },
  {
    id: 30,
    name: "PC WINDOWD Intel Core i9 / RTX 4070",
    category: "pc",
    subCategory: "",
    brand: "Brand9",
    rating: 5,
    reviewCount: 13,
    price: 24000000,
    oldPrice: 26000000,
    discount: "-8%",
    quantity: 1,
    images: [
      "../assets/img/pc/PC WINDOWD-1.jpg",
      "../assets/img/pc/PC WINDOWD-2.jpg",
      "../assets/img/pc/PC WINDOWD-3.jpg",
      "../assets/img/pc/PC WINDOWD-4.jpg",
      "../assets/img/pc/PC WINDOWD-5.jpg",
    ],
    highlightSpecs: {
      cpu: "Intel Core i9 (13th Gen)",
      gpu: "NVIDIA GeForce RTX 4070 12GB",
      ram: "32GB DDR5",
      ssd: "1TB NVMe SSD",
      main: "Z690",
      screen: null,
      battery: null,
      connect: null,
      feature: null,
      layout: null,
      keycap: null,
      panel: null,
      size: null,
      hz: null,
    },
    description: {
      intro:
        "Dòng PC hiệu năng cao, thiết kế bền bỉ phù hợp cho gaming, đồ họa và làm việc.",
      sections: [
        {
          title: "Case thiết kế hiện đại",
          content:
            "Thùng máy với kiểu dáng công nghiệp, đảm bảo thoáng khí và dễ nâng cấp.",
          image: "../assets/img/pc/PC WINDOWD-1.jpg",
        },
        {
          title: "Bộ xử lý mạnh mẽ",
          content:
            "Trang bị CPU đời mới, xử lý đa nhiệm và các tác vụ nặng mượt mà.",
          image: "../assets/img/pc/PC WINDOWD-2.jpg",
        },
        {
          title: "Tản nhiệt hiệu quả",
          content:
            "Hệ thống quạt và tản nhiệt chất lượng cao giữ máy mát trong thời gian dài.",
          image: "../assets/img/pc/PC WINDOWD-3.jpg",
        },
      ],
    },
    brandInfo: {
      brand: "PC World",
      model: "Custom Build",
      color: "Đa dạng",
      weight: "Tùy cấu hình",
      ports: "USB, HDMI, DisplayPort, Ethernet",
    },
  },
  // Bàn phím
  {
    id: 31,
    name: "AKKO 3068B Plus Black Pink",
    category: "keyboard",
    subCategory: "gaming",
    brand: "AKKO",

    rating: 5,
    reviewCount: 20,

    price: 1290000,
    oldPrice: 1490000,
    discount: "-13%",
    quantity: 1,

    images: [
      "../assets/img/keyboard/ban-phim-co-akko-3068b-multi-modes-black-pink-ava3.jpg",
      "../assets/img/keyboard/AKKO3068B_1.jpg",
      "../assets/img/keyboard/AKKO3068B_2.jpg",
      "../assets/img/keyboard/AKKO3068B_3.jpg",
      "../assets/img/keyboard/AKKO3068B_4.jpg",
    ],

    highlightSpecs: {
      cpu: null,
      gpu: null,
      ram: null,
      ssd: null,
      main: null,
      screen: null,
      battery: null,
      connect: "USB-C/BT/2.4G",
      feature: null,
      layout: "98 Phím",
      keycap: "PBT Double-Shot",
      keycap: null,
      panel: null,
      size: null,
      hz: null,
    },

    description: {
      intro:
        "Một trong những dòng bàn phím cơ đến từ Akko hứa hẹn sẽ mang đến cho bạn những trải nghiệm tuyệt vời.",

      sections: [
        {
          title: "Thiết kế nhỏ gọn với tông màu đầy sáng tạo",
          content:
            "AKKO 3068B Plus Black&Cyan với layout 98 phím nhỏ gọn nhưng vẫn đáp ứng tốt mọi nhu cầu sử dụng từ học tập, làm việc cho đến chơi game giải trí. Kết hợp với đó là tông màu thể hiện được chất riêng của những dòng bàn phím Akko. Sự kết hợp hài hòa giữa đen, xám và xanh Cyan giúp chiếc bàn phím thêm phần đẹp mắt và độc đáo.",
          image: "../assets/img/keyboard/AKKO3068B_2.jpg",
        },
        {
          title: "LED nền RGB với nhiều chế độ",
          content:
            "Để thêm phần ấn tượng cho chiếc bàn phím, Akko đã trang bị trên 3068B Plus Black&Cyan hệ thống LED nền RGB với nhiều chế độ chiếu sáng đẹp mắt, sống động. Giúp bạn tăng thêm trải nghiệm với những tựa game yêu thích, sáng tạo trong công việc. ",
          image: "../assets/img/keyboard/AKKO3068B_3.jpg",
        },
        {
          title: "AKKO 3068B Plus Black&Cyan với nhiều tính năng nổi bật",
          content:
            "Không dừng lại ở đó, để người chơi có những trải nghiệm tốt nhất Akko trang bị trên bàn phím của mình tính năng thay nóng switch (hotswap, 5 pin, TTC hotswap socket) giúp người dùng có thể tùy ý thay switch theo sở thích.",
          image: "../assets/img/keyboard/AKKO3068B_4.jpg",
        },
      ],
    },

    brandInfo: {
      brand: "AKKO",
      model: "3068B Plus",
      color: "Black Pink",
      weight: "0.8kg",
      ports: "USB-C",
    },
  },
  {
    id: 32,
    name: "Logitech G Pro X TKL Lightspeed",
    category: "keyboard",
    subCategory: "gaming",
    brand: "Logitech",

    rating: 5,
    reviewCount: 18,

    price: 3490000,
    oldPrice: 3990000,
    discount: "-12%",
    quantity: 1,

    images: [
      "../assets/img/keyboard/id32.jpg",
      "../assets/img/keyboard/LogitechGProXTKLLightspeed_1.jpg",
      "../assets/img/keyboard/LogitechGProXTKLLightspeed_2.png",
      "../assets/img/keyboard/LogitechGProXTKLLightspeed_3.png",
      "../assets/img/keyboard/LogitechGProXTKLLightspeed_4.jpg",
    ],

    highlightSpecs: {
      cpu: null,
      gpu: null,
      ram: null,
      ssd: null,
      main: null,
      screen: null,
      battery: null,
      connect: "USB-C/BT/2.4G",
      feature: null,
      layout: "98 Phím",
      keycap: "PBT Double-Shot",
      keycap: null,
      panel: null,
      size: null,
      hz: null,
    },

    description: {
      intro: "Bàn phím cơ không dây Logitech G PRO X TKL LIGHTSPEED",

      sections: [
        {
          title: "Kết nối không dây LIGHTSPEED",
          content:
            "LIGHTSPEED là giải pháp không dây cấp độ chuyên gia đạt được hiệu suất như có dây, cho độ trễ 1ms, đem cho bạn những trải nghiệm tuyệt vời.",
          image: "../assets/img/keyboard/LogitechGProXTKLLightspeed_1.jpg",
        },
        {
          title: "Keyswitch Tactile",
          content:
            "Keyswitch Tactile mang lại hiệu suất cơ học chính xác, yên tĩnh với cảm giác bấm tuyệt vời và độ bền 70 triệu lần nhấn. Là lựa chọn của những chuyên gia thể thao điện tử hàng đầu.",
          image: "../assets/img/keyboard/LogitechGProXTKLLightspeed_4.jpg",
        },
        {
          title: "Tùy chỉnh điều khiển",
          content:
            "Với các phím có thể lập trình, đèn nền RGB LIGHTSYNC, Gaming mode và chức năng Game Mode Lock mới cùng các nút điều khiển phương tiện và núm xoay âm lượng, Bàn phím cơ không dây Logitech G PRO X TKL LIGHTSPEED cho phép bạn kiểm soát trên hành trình đi tới chiến thắng.",
          image: "../assets/img/keyboard/LogitechGProXTKLLightspeed_2.png",
        },
      ],
    },

    brandInfo: {
      brand: "Logitech",
      model: "G Pro X TKL",
      color: "Black",
      weight: "1kg",
      ports: "USB-C",
    },
  },
  {
    id: 33,
    name: "Razer BlackWidow V4 Pro",
    category: "keyboard",
    subCategory: "gaming",
    brand: "Razer",

    rating: 5,
    reviewCount: 25,

    price: 5790000,
    oldPrice: 6290000,
    discount: "-8%",
    quantity: 1,

    images: [
      "../assets/img/keyboard/id33.png",
      "../assets/img/keyboard/RazerBlackWidowV4Pro_1.png",
      "../assets/img/keyboard/RazerBlackWidowV4Pro_2.png",
      "../assets/img/keyboard/RazerBlackWidowV4Pro_1.png",
      "../assets/img/keyboard/RazerBlackWidowV4Pro_2.png",
    ],

    highlightSpecs: {
      cpu: null,
      gpu: null,
      ram: null,
      ssd: null,
      main: null,
      screen: null,
      battery: null,
      connect: "USB-C/BT/2.4G",
      feature: null,
      layout: "98 Phím",
      keycap: "PBT Double-Shot",
      keycap: null,
      panel: null,
      size: null,
      hz: null,
    },

    description: {
      intro:
        "Razer BlackWidow V4 Pro Yellow Switch có thể nói là dòng bàn phím cơ đa năng nhất thời điểm hiện tại.",

      sections: [
        {
          title: "Thiết kế nổi bật, layout Fullsize tiện dụng",
          content:
            "Sử dụng layout Fullsize vô cùng tiện lợi cùng cụm phím Numpad tách biệt hỗ trợ tốt nhất cho các công việc nhập liệu, soạn thảo bên cạnh nhu cầu chơi game đỉnh cao. Razer BlackWidow V4 Pro sử dụng tông màu đen chủ đạo cùng những chi tiết góc cạnh được gia công tinh xảo tất cả tạo nên tổng thể vô cùng đẹp mắt khi đặt cùng những dòng sản phẩm khác trong cùng hệ sinh thái Razer như chuột gaming, tai nghe máy tính,...",
          image: "../assets/img/keyboard/RazerBlackWidowV4Pro_1.png",
        },
        {
          title: "Cụm phím Multi Function tách biệt",
          content:
            "Trang bị cụm phím Multi Function tách biệt giúp bạn có thêm những trải nghiệm trong khi làm việc và cả chơi game. Với nút tăng/giảm âm thanh và các nút chuyển bài hát, tạm dừng và phát nhạc được bo tròn được đặt gọn gàng ở góc phải tránh làm ảnh hưởng đến trải nghiệm cá nhân.",
          image: "../assets/img/keyboard/RazerBlackWidowV4Pro_1.png",
        },
        {
          title: "Nút xoay thông minh giúp kiểm soát mọi tác vụ",
          content:
            "Một trong những ưu điểm vượt trội trên dòng bàn phím Razer chính là sử dụng nút xoay đa nhiệm được đặt trên góc trái bàn phím máy tính giúp bạn xử lý mọi tác vụ một cách nhẹ nhàng, giản đơn. Nhờ vào nút xoay thông minh bạn có thể tự do điều chỉnh độ sáng bàn phím, Zoom tài liệu, lướt web, chuyển đổi giữa các tab làm việc & giải trí,...",
          image: "../assets/img/keyboard/RazerBlackWidowV4Pro_2.png",
        },
      ],
    },

    brandInfo: {
      brand: "Razer",
      model: "BlackWidow V4 Pro",
      color: "Black",
      weight: "1.3kg",
      ports: "USB-C",
    },
  },
  {
    id: 34,
    name: "Corsair K70 RGB MK2",
    category: "keyboard",
    subCategory: "gaming",
    brand: "Corsair",

    rating: 4,
    reviewCount: 30,

    price: 3290000,
    oldPrice: 3790000,
    discount: "-13%",
    quantity: 1,

    images: [
      "../assets/img/keyboard/CorsairK70RGBMK2_5.png",
      "../assets/img/keyboard/CorsairK70RGBMK2_1.png",
      "../assets/img/keyboard/CorsairK70RGBMK2_2.png",
      "../assets/img/keyboard/CorsairK70RGBMK2_3.png",
      "../assets/img/keyboard/CorsairK70RGBMK2_4.png",
    ],

    highlightSpecs: {
      cpu: null,
      gpu: null,
      ram: null,
      ssd: null,
      main: null,
      screen: null,
      battery: null,
      connect: "USB-C/BT/2.4G",
      feature: null,
      layout: "98 Phím",
      keycap: "PBT Double-Shot",
      keycap: null,
      panel: null,
      size: null,
      hz: null,
    },

    description: {
      intro:
        "Sự thoải mái khi chơi game đã ổn định hơn rất nhiều cùng với dòng bàn phím mới nhất đến từ Corsair. Bằng cách tối ưu hóa vị trí đặt tay thư giãn cùng với low profile.",

      sections: [
        {
          title: "Nhỏ nhưng chất",
          content:
            "Một trong những dòng bàn phím cơ sở hữu thiết kế mỏng, nhẹ, trọng lượng nhẹ nhàng cùng với khung nhôm cực bền. Được thiết kế để sử dụng trong thời gian cực lâu dài với độ cao của bàn phím chỉ tới 29 mm.",
          image: "../assets/img/keyboard/CorsairK70RGBMK2_1.png",
        },
        {
          title: "ICUE",
          content:
            "Phần mềm Corsair ICUE cho phép điều khuyển ánh sáng tuyệt vời, tạo lập macro một cách tinh vi cùng với đồng bộ hóa các sản phẩm lại tạo thành 1 dàn ánh sáng độc nhất!",
          image: "../assets/img/keyboard/CorsairK70RGBMK2_2.png",
        },
        {
          title: "Không chỉ là một chiếc bàn phím",
          content:
            "Tất cả những gì bạn cần đều có ở bàn phím Corsair K70 RGB MK.2 Low Profile",
          image: "../assets/img/keyboard/CorsairK70RGBMK2_3.png",
        },
      ],
    },

    brandInfo: {
      brand: "Corsair",
      model: "K70 MK2",
      color: "Black",
      weight: "1.2kg",
      ports: "USB",
    },
  },
  {
    id: 35,
    name: "Keychron K8 Pro",
    category: "keyboard",
    subCategory: "mechanical",
    brand: "Keychron",

    rating: 5,
    reviewCount: 12,

    price: 2590000,
    oldPrice: 2890000,
    discount: "-10%",
    quantity: 1,

    images: [
      "../assets/img/keyboard/id35.jpg",
      "../assets/img/keyboard/id35.jpg",
      "../assets/img/keyboard/id35.jpg",
      "../assets/img/keyboard/id35.jpg",
      "../assets/img/keyboard/id35.jpg",
    ],

    highlightSpecs: {
      cpu: null,
      gpu: null,
      ram: null,
      ssd: null,
      main: null,
      screen: null,
      battery: null,
      connect: "USB-C/BT/2.4G",
      feature: null,
      layout: "98 Phím",
      keycap: "PBT Double-Shot",
      keycap: null,
      panel: null,
      size: null,
      hz: null,
    },

    description: {
      intro:
        "Keychron K8 Pro là sự lựa chọn hoàn hảo cho người dùng đang tìm kiếm một chiếc bàn phím không dây chất lượng cho mọi trải nghiệm, sở hữu thiết kế tinh tế, sang trọng.",

      sections: [
        {
          title: "Thiết kế Tenkeyless nhỏ gọn, tinh tế",
          content:
            "Dễ dàng cất gọn bàn phím trong balo nhưng vẫn đủ không gian để mang theo những thiết bị khác như chuột máy tính, tai nghe để có thể chơi game ở bất kỳ đâu. Nhờ vào sở hữu thiết kế Tenkeyless nhỏ gọn, tinh tế. Ngoài ra, Keychron còn trang bị cụm phím media nổi bật giúp điều chỉnh âm thanh, ánh sáng,...",
          image: "../assets/img/keyboard/id35.jpg",
        },
        {
          title: "Keychron K8 Pro hỗ trợ hot swap",
          content:
            "Keychron K8 Pro được hỗ trợ tính năng thay switch “nóng” hotswap giúp người chơi dễ dàng nâng cấp trải nghiệm gõ phím của mình khi có thể kết hợp nhiều loại switch khác nhau trên cùng một chiếc bàn phím. Thể hiện được tính sáng tạo và đẳng cấp của  một chiếc bàn phím cơ custom cận cao cấp từ nhà Keychron.",
          image: "../assets/img/keyboard/id35.jpg",
        },
        {
          title: "Switch Gateron G-Pro chất lượng",
          content:
            "Sử dụng công tắc cơ học Gateron G-Pro mang đến trải nghiệm gõ phím mượt mà, nhẹ nhàng hỗ trợ mọi thao tác trên bàn phím nhanh chóng, chiếm lợi thế khi cần sử dụng nhiều tổ hợp phím. Bạn hoàn toàn có thể lựa chọn Keychron K8 Pro Keycap Xanh Khung Nhôm Led RGB với nhiều phiên bản switch khác nhau đáp ứng tốt nhu cầu sử dụng và sở thích cá nhân.",
          image: "../assets/img/keyboard/id35.jpg",
        },
      ],
    },

    brandInfo: {
      brand: "Keychron",
      model: "K8 Pro",
      color: "Gray",
      weight: "0.9kg",
      ports: "USB-C",
    },
  },
  {
    id: 36,
    name: "AKKO 5075B Plus",
    category: "keyboard",
    subCategory: "mechanical",
    brand: "AKKO",

    rating: 5,
    reviewCount: 16,

    price: 1990000,
    oldPrice: 2290000,
    discount: "-13%",
    quantity: 1,

    images: [
      "../assets/img/keyboard/id36.jpg",
      "../assets/img/keyboard/AKKO5075BPlus_1.jpg",
      "../assets/img/keyboard/AKKO5075BPlus_2.jpg",
      "../assets/img/keyboard/AKKO5075BPlus_3.jpg",
      "../assets/img/keyboard/AKKO5075BPlus_4.jpg",
    ],

    highlightSpecs: {
      cpu: null,
      gpu: null,
      ram: null,
      ssd: null,
      main: null,
      screen: null,
      battery: null,
      connect: "USB-C/BT/2.4G",
      feature: null,
      layout: "98 Phím",
      keycap: "PBT Double-Shot",
      keycap: null,
      panel: null,
      size: null,
      hz: null,
    },

    description: {
      intro:
        "Nhắc tới AKKO chắc hẳn bạn sẽ nhớ tới ngay những chiếc bàn phím máy tính có mẫu mã đa dạng màu sắc. Nhưng bàn phím AKKO 5075B Plus Black sẽ thay đổi suy nghĩ của bạn, với thiết kế đơn sắc và tích hợp những tính năng đặc biệt thì đây là chiếc bàn phím phù hợp cho những bạn thích sự đơn giản.",

      sections: [
        {
          title: "Bàn phím phù hợp cho nhiều thiết bị",
          content:
            "Bàn phím AKKO 5075B Plus được trang bị 3 tính năng kết nối cho bạn thoải mái kết hợp bàn phím cơ với nhiều thiết bị khác nhau. Bạn có thể trải nghiệm chơi game trên PC, Laptop với độ trễ cực thấp hay liên kết với 3 thiết bị cùng lúc một cách nhanh chóng và dễ dàng. ",
          image: "../assets/img/keyboard/AKKO5075BPlus_3.jpg",
        },
        {
          title: "Keycap chuẩn ASA profile",
          content:
            "Bàn phím không dây được AKKO trang bị cho mình keycap được làm từ chất liệu PBT và in Double - shot chắc chắn mang đến bộ phím bền màu theo thời gian.",
          image: "../assets/img/keyboard/AKKO5075BPlus_2.jpg",
        },
        {
          title: "Bộ switch mới của nhà AKKO",
          content:
            "AKKO nổi tiếng với những bộ switch đặc biệt của hãng và bàn phím AKKO 5075B Plus cũng được AKKO trang bị cho mình bộ switch AKKO switch v3 (Cream Blue Pro).",
          image: "../assets/img/keyboard/AKKO5075BPlus_4.jpg",
        },
      ],
    },

    brandInfo: {
      brand: "AKKO",
      model: "5075B Plus",
      color: "White",
      weight: "0.8kg",
      ports: "USB-C",
    },
  },
  {
    id: 37,
    name: "DareU EK87",
    category: "keyboard",
    subCategory: "gaming",
    brand: "DareU",

    rating: 4,
    reviewCount: 20,

    price: 890000,
    oldPrice: 1090000,
    discount: "-18%",
    quantity: 1,

    images: [
      "../assets/img/keyboard/id37.png",
      "../assets/img/keyboard/DareUEK87_1.jpg",
      "../assets/img/keyboard/DareUEK87_2.jpg",
      "../assets/img/keyboard/DareUEK87_3.jpg",
      "../assets/img/keyboard/DareUEK87_4.jpg",
    ],

    highlightSpecs: {
      cpu: null,
      gpu: null,
      ram: null,
      ssd: null,
      main: null,
      screen: null,
      battery: null,
      connect: "USB-C/BT/2.4G",
      feature: null,
      layout: "98 Phím",
      keycap: "PBT Double-Shot",
      keycap: null,
      panel: null,
      size: null,
      hz: null,
    },

    description: {
      intro:
        "Bàn phím cơ Gaming DAREU EK87 v2 GRAY BLACK là sự kết hợp hoàn hảo giữa thiết kế sang trọng và hiệu năng mạnh mẽ",

      sections: [
        {
          title: "Thiết kế đẹp mắt, hiệu năng ấn tượng",
          content:
            "DAREU EK87 v2 GRAY BLACK là một bàn phím cơ giá rẻ, sở hữu thiết kế đẹp mắt với hai tông màu xám đen và dải đèn LED RGB độc đáo ở hai bên. Với 87 phím tiêu chuẩn, bàn phím phù hợp với đa số người dùng, không quá cồng kềnh và tiện lợi cho việc di chuyển. Bàn phím sử dụng switch DareU DREAM (Linear) mang đến trải nghiệm gõ phím êm ái và nhẹ nhàng.",
          image: "../assets/img/keyboard/DareUEK87_1.jpg",
        },
        {
          title: "Chất lượng tốt, giá thành hấp dẫn",
          content:
            "DAREU EK87 v2 GRAY BLACK được đánh giá là một trong những bàn phím cơ gaming giá rẻ nhưng chất lượng tốt. Bàn phím máy tính này sử dụng switch DareU DREAM được đánh giá cao về độ bền và phản hồi nhanh chóng. Hơn nữa, bàn phím còn hỗ trợ N-key rollover giúp người dùng có thể nhấn nhiều phím cùng lúc mà không bị lỗi nhập liệu.",
          image: "../assets/img/keyboard/DareUEK87_3.jpg",
        },
        {
          title: "Tính năng đa dạng phù hợp với nhu cầu sử dụng",
          content:
            "Bàn phím được trang bị dải đèn LED RGB độc đáo ở hai bên, cho phép người dùng tùy chỉnh hiệu ứng đèn theo ý muốn. Bàn phím còn hỗ trợ chức năng Multimedia giúp người dùng có thể điều chỉnh âm lượng, chuyển bài hát, dừng bài hát ngay trên bàn phím mà không cần thao tác nhiều bằng chuột.",
          image: "../assets/img/keyboard/DareUEK87_4.jpg",
        },
      ],
    },

    brandInfo: {
      brand: "DareU",
      model: "EK87",
      color: "Black",
      weight: "0.85kg",
      ports: "USB",
    },
  },
  {
    id: 38,
    name: "SteelSeries Apex Pro",
    category: "keyboard",
    subCategory: "gaming",
    brand: "SteelSeries",

    rating: 5,
    reviewCount: 22,

    price: 5490000,
    oldPrice: 5990000,
    discount: "-8%",
    quantity: 1,

    images: [
      "../assets/img/keyboard/id38.jpg",
      "../assets/img/keyboard/SteelSeriesApexPro_1.jpg",
      "../assets/img/keyboard/SteelSeriesApexPro_2.jpg",
      "../assets/img/keyboard/SteelSeriesApexPro_3.jpg",
      "../assets/img/keyboard/SteelSeriesApexPro_4.jpg",
    ],

    highlightSpecs: {
      cpu: null,
      gpu: null,
      ram: null,
      ssd: null,
      main: null,
      screen: null,
      battery: null,
      connect: "USB-C/BT/2.4G",
      feature: null,
      layout: "98 Phím",
      keycap: "PBT Double-Shot",
      keycap: null,
      panel: null,
      size: null,
      hz: null,
    },

    description: {
      intro:
        "Apex Pro là kết hợp sự mượt mà của membrane switch với độ bền, hiệu suất và cảm giác thoải mái khi gõ, cho trải nghiệm chơi game tuyệt vời",

      sections: [
        {
          title: "Màn hình OLED thông minh",
          content:
            "Tùy chỉnh với màn hình OLED với các gif yêu thích của bạn, xem thông tin trò chơi đang hoạt động, tin nhắn discord đến, cài đặt, v.v. và hiển thị thông tin trong game giúp chiếc bàn phím máy tính thêm phần nổi trội so với các đố thủ ở cùng phân khúc.",
          image: "../assets/img/keyboard/SteelSeriesApexPro_1.jpg",
        },
        {
          title: "Công tắc cơ điều chỉnh",
          content:
            "Thay vì những công tắc truyền động cố định truyền thống các công tắc OmniPoint có thể được điều chỉnh để chỉnh sửa tại bất kỳ điểm nào từ 0,4-3,6mm, cho phép bạn sử dụng bàn phím hoàn hảo cho các trò chơi và kiểu gõ khác nhau.",
          image: "../assets/img/keyboard/SteelSeriesApexPro_3.jpg",
        },
        {
          title: "Kê tay cao cấp",
          content:
            "Phụ kiện tuyệt vời cho bàn phím cơ, với nam chân gắn dễ dàng hơn sẽ xóa bỏ mọi phiền toái khi lắp không vừa ý bạn. Bao quát lòng bàn tay để hỗ trợ, cho dù là nghỉ ngơi hay làm việc thì bạn cũng sẽ cảm thấy cực kì thoải mái.",
          image: "../assets/img/keyboard/SteelSeriesApexPro_4.jpg",
        },
      ],
    },

    brandInfo: {
      brand: "SteelSeries",
      model: "Apex Pro",
      color: "Black",
      weight: "1.1kg",
      ports: "USB",
    },
  },
  {
    id: 39,
    name: "HyperX Alloy Origins 65",
    category: "keyboard",
    subCategory: "gaming",
    brand: "HyperX",

    rating: 5,
    reviewCount: 19,

    price: 2190000,
    oldPrice: 2490000,
    discount: "-12%",
    quantity: 1,

    images: [
      "../assets/img/keyboard/id39.jpg",
      "../assets/img/keyboard/HyperXAlloyOrigins65_1.jpg",
      "../assets/img/keyboard/HyperXAlloyOrigins65_2.jpg",
      "../assets/img/keyboard/HyperXAlloyOrigins65_3.jpg",
      "../assets/img/keyboard/HyperXAlloyOrigins65_4.jpg",
    ],

    highlightSpecs: {
      cpu: null,
      gpu: null,
      ram: null,
      ssd: null,
      main: null,
      screen: null,
      battery: null,
      connect: "USB-C/BT/2.4G",
      feature: null,
      layout: "98 Phím",
      keycap: "PBT Double-Shot",
      keycap: null,
      panel: null,
      size: null,
      hz: null,
    },

    description: {
      intro:
        "HyperX Alloy Origins 65 là bàn phím cân bằng kết hợp sự nhỏ gọn và chức năng nhưng vẫn đảm bảo hiệu quả. ",

      sections: [
        {
          title: "Kích thước 65% nhỏ gọn đủ chức năng",
          content:
            "Sự cân bằng tối ưu giữa kích thước nhỏ gọn và chức năng. Bàn phím có kích thước 65% giải phóng nhiều không gian cho chuột hơn so với bàn phím không phím số, nhưng vẫn giữ được các phím chuyên dụng như phím mũi tên, Page Up/Down, Home và Delete.",
          image: "../assets/img/keyboard/HyperXAlloyOrigins65_1.jpg",
        },
        {
          title: "Toàn thân bằng nhôm chuẩn chế tạo máy bay",
          content:
            "Vỏ nhôm giữ cho cấu trúc bàn phím bền bỉ và ổn định khi hành động trở nên quyết liệt và trò chơi đến giai đoạn quyết định; trận này đến trận khác, đêm này qua đêm khác.",
          image: "../assets/img/keyboard/HyperXAlloyOrigins65_2.jpg",
        },
        {
          title: "Mũ phím PBT đúc hai lần với chức năng phụ được in ở bên cạnh",
          content:
            "Mũ phím được thiết kế bằng vật liệu PBT bền bỉ chống bào mòn, ma sát và dung môi. Các chức năng phụ được in ở bên cạnh mũ phím để nhận diện nhanh.",
          image: "../assets/img/keyboard/HyperXAlloyOrigins65_3.jpg",
        },
      ],
    },

    brandInfo: {
      brand: "HyperX",
      model: "Alloy Origins 65",
      color: "Black",
      weight: "0.83kg",
      ports: "USB-C",
    },
  },
  {
    id: 40,
    name: "ASUS ROG Strix Scope II 96",
    category: "keyboard",
    subCategory: "gaming",
    brand: "ASUS",

    rating: 5,
    reviewCount: 14,

    price: 4290000,
    oldPrice: 4690000,
    discount: "-9%",
    quantity: 1,

    images: [
      "../assets/img/keyboard/id40.jpg",
      "../assets/img/keyboard/ASUSROGStrixScopeII96_1.jpg",
      "../assets/img/keyboard/ASUSROGStrixScopeII96_2.jpg",
      "../assets/img/keyboard/ASUSROGStrixScopeII96_3.jpg",
      "../assets/img/keyboard/ASUSROGStrixScopeII96_4.jpg",
    ],

    highlightSpecs: {
      cpu: null,
      gpu: null,
      ram: null,
      ssd: null,
      main: null,
      screen: null,
      battery: null,
      connect: "USB-C/BT/2.4G",
      feature: null,
      layout: "98 Phím",
      keycap: "PBT Double-Shot",
      keycap: null,
      panel: null,
      size: null,
      hz: null,
    },

    description: {
      intro:
        "Nếu bạn đang tìm kiếm một bàn phím không dây chất lượng cao cho bàn làm việc của mình, bàn phím không dây ROG NX Snow sẽ là lựa chọn hoàn hảo.",

      sections: [
        {
          title: "Thiết kế nhỏ gọn ",
          content:
            "Bàn phím Asus ROG Strix Scope có thiết kế nhỏ gọn, chỉ chiếm 96% diện tích so với các bàn phím thông thường. Thiết kế này không chỉ giúp tiết kiệm không gian mà còn tạo sự gọn gàng, ngăn nắp cho bàn làm việc của bạn. Với kích thước nhỏ gọn, bạn có thể dễ dàng mang theo bàn phím khi di chuyển, sử dụng ở nhiều không gian khác nhau.",
          image: "../assets/img/keyboard/ASUSROGStrixScopeII96_2.jpg",
        },
        {
          title: "Giảm tiếng ồn, gõ phím mượt mà ",
          content:
            "Một trong những điểm nổi bật của bàn phím  ROG NX Snow là switch cơ ROG NX Snow đã được bôi trơn sẵn. Switch này mang lại cảm giác gõ phím tuyến tính và yên tĩnh, giúp giảm thiểu tiếng ồn khi làm việc. Đặc biệt, switch có thể thay nóng, cho phép bạn dễ dàng thay đổi hoặc nâng cấp mà không cần mua bàn phím mới. Ngoài ra, Keycap PBT chất lượng cao của ROG NX Snow được làm từ chất liệu PBT cao cấp, nổi tiếng với độ bền và khả năng chống mài mòn cao. Chất liệu này không chỉ mang lại cảm giác gõ phím thoải mái mà còn giữ được màu sắc và độ bền lâu dài, giúp bàn phím của bạn luôn như mới.",
          image: "../assets/img/keyboard/ASUSROGStrixScopeII96_3.jpg",
        },
        {
          title: "Hệ thống chiếu sáng RGB bắt mắt",
          content:
            "Bàn phím Asus ROG Strix Scope được trang bị hệ thống chiếu sáng RGB Aura Sync, cho phép bạn tùy chỉnh màu sắc và hiệu ứng ánh sáng theo ý thích. Bạn có thể đồng bộ ánh sáng với các thiết bị ROG khác để tạo nên không gian làm việc hoặc giải trí đồng nhất và hấp dẫn.",
          image: "../assets/img/keyboard/ASUSROGStrixScopeII96_4.jpg",
        },
      ],
    },

    brandInfo: {
      brand: "ASUS",
      model: "ROG Scope II 96",
      color: "Black",
      weight: "1kg",
      ports: "USB-C",
    },
  },
  // màn hình
  {
    id: 41,
    name: "Màn hình MSI PRO MP251L E2 25 IPS 120Hz",
    category: "monitor",
    subCategory: "",
    brand: "Acer",

    rating: 5,
    reviewCount: 15,

    price: 2190000,
    oldPrice: 2990000,
    discount: "-27%",
    quantity: 1,

    images: [
      "../assets/img/monitor/mp251/mp251-1.jpg",
      "../assets/img/monitor/mp251/mp251-2.png",
      "../assets/img/monitor/mp251/mp251-3.png",
      "../assets/img/monitor/mp251/mp251-4.png",
      "../assets/img/monitor/mp251/mp251-5.png",
    ],

    highlightSpecs: {
      cpu: null,
      gpu: null,
      ram: null,
      ssd: null,
      main: null,
      screen: null,
      battery: null,
      connect: null,
      feature: null,
      layout: null,
      keycap: null,
      panel: "IPS",
      size: "25 inch",
      hz: "120Hz",
    },

    description: {
      intro:
        "Màn hình MSI PRO MP251L E2 25 IPS 120Hz là lựa chọn lý tưởng cho những người dùng cần một màn hình chất lượng cao với độ phân giải sắc nét và tốc độ phản hồi nhanh.",

      sections: [
        {
          title:
            "Chất lượng hình ảnh IPS sắc nét, sống động và chân thựcThiết kế đơn giản, chuyên nghiệp",
          content:
            "Màn hình MSI PRO MP251 E2 với vẻ ngoài chuyên nghiệp, tối giản. Màu sắc chủ đạo là màu đen, tạo cảm giác trang nhã và dễ dàng hòa nhập vào bất kỳ phong cách thiết kế nội thất nào. Điểm nhấn trong thiết kế của MSI PRO MP251 E2 chính là viền màn hình máy tính siêu mỏng ở 3 cạnh (trên, trái, phải). Thiết kế này không chỉ tăng tính thẩm mỹ cho màn hình mà còn tạo cảm giác hình ảnh tràn viền, mở rộng không gian hiển thị một cách trực quan.",
          image: "../assets/img/monitor/mp251/mp251-1.jpg",
        },
        {
          title: "Chất lượng hình ảnh IPS sắc nét, sống động và chân thực",
          content:
            "Màn hình MSI PRO MP251 E2 sử dụng tấm nền IPS với góc nhìn rộng 178°, giúp màu sắc và độ tương phản ổn định ở nhiều góc nhìn khác nhau. Kích thước 25 inch cùng độ phân giải Full HD mang lại không gian làm việc rộng và hình ảnh sắc nét. Màn hình có độ sáng 250 nits, phù hợp cho môi trường văn phòng và gia đình. Ngoài ra, màn hình hiển thị 16.7 triệu màu và độ phủ sRGB >99%, cho màu sắc sống động, đáp ứng tốt nhu cầu làm việc, giải trí và thiết kế đồ họa nhẹ.",
          image: "../assets/img/monitor/mp251/mp251-2.png",
        },
        {
          title:
            "Tần số quét 120Hz - Mượt mà vượt trội cho cả công việc và giải trí",
          content:
            "Với màn hình 120Hz của MSI PRO MP251 E2, bạn sẽ cảm nhận được sự nhanh chóng và mượt mà khi thực hiện các tác vụ văn phòng, di chuyển các cửa sổ, cuộn trang. Khi xem phim và video, các cảnh hành động nhanh, chuyển động máy quay sẽ trở nên rõ nét và mượt mà hơn, tăng cường trải nghiệm xem phim. ",
          image: "../assets/img/monitor/mp251/mp251-3.png",
        },
        {
          title: "Ứng dụng công nghệ Anti-Glare hiện đại",
          content:
            "Nhớ ứng dụng công nghệ Anti-Glare trên màn hình MSI MP251 E2, bạn có thể yên tâm tận hưởng hình ảnh sắc nét, rõ ràng trong mọi môi trường ánh sáng khác nhau. Không chỉ vậy, màn hình còn quan tâm đến sức khỏe đôi mắt của người dùng với công nghệ Eye-Q Check. Tính năng này sẽ nhắc nhở bạn nghỉ ngơi hợp lý sau thời gian dài sử dụng liên tục. Cùng với đó, công nghệ độc quyền EyesErgo từ MSI sẽ chăm sóc toàn diện cho đôi mắt, mang đến sự thoải mái tối đa trong suốt quá trình bạn làm việc và giải trí. ",
          image: "../assets/img/monitor/mp251/mp251-4.png",
        },
      ],
    },

    brandInfo: {
      brand: "MSI",
      model: "PRO MP251L E2",
      color: "Đen",
      weight: "2.5kg",
      ports: "HDMI, USB-A, Jack 3.5mm",
    },
  },
  {
    id: 42,
    name: "Màn hình AOC 25B36X 25'' IPS 144Hz chuyên game",
    category: "monitor",
    subCategory: "",
    brand: "AOC",

    rating: 5,
    reviewCount: 15,

    price: 2190000,
    oldPrice: 2790000,
    discount: "-22%",
    quantity: 1,

    images: [
      "../assets/img/monitor/25b36x/aoc-1.jpg",
      "../assets/img/monitor/25b36x/aoc-2.png",
      "../assets/img/monitor/25b36x/aoc-3.png",
      "../assets/img/monitor/25b36x/aoc-4.png",
      "../assets/img/monitor/25b36x/aoc-5.png",
    ],

    highlightSpecs: {
      cpu: null,
      gpu: null,
      ram: null,
      ssd: null,
      main: null,
      screen: null,
      battery: null,
      connect: null,
      feature: null,
      layout: null,
      keycap: null,
      panel: "IPS",
      size: "25 inch",
      hz: "144Hz",
    },

    description: {
      intro:
        "Màn hình AOC 25B36X 25'' IPS 144Hz chuyên game là lựa chọn lý tưởng cho game thủ muốn có trải nghiệm mượt mà và rõ nét trong từng khung hình. Với tần số quét 144Hz và tốc độ phản hồi chỉ 0.5ms MPRT, mọi chuyển động nhanh đều được hiển thị chính xác, hạn chế tối đa hiện tượng mờ hay bóng hình. Tấm nền IPS mang đến màu sắc trung thực, góc nhìn rộng và độ sáng ổn định, giúp người chơi dễ dàng quan sát trong mọi tình huống. Đây là chiếc màn hình cân bằng tốt giữa hiệu suất và chất lượng hình ảnh, phù hợp cho cả chơi game giải trí lẫn thi đấu eSports.",

      sections: [
        {
          title: "Làm chủ mọi khung hình với tốc độ 144Hz và phản hồi 0.5ms",
          content:
            "Trong các tựa game đối kháng và FPS có nhịp độ cao, một phần nghìn giây cũng có thể quyết định kết quả. Màn hình AOC 25B36X trang bị tần số quét 144Hz, giúp mọi chuyển động của đối thủ và môi trường game được hiển thị một cách trôi chảy, cho phép bạn phản ứng nhanh hơn.",
          image: "../assets/img/monitor/25b36x/aoc-1.jpg",
        },
        {
          title: "Đắm chìm trong thế giới game với màu sắc sống động",
          content:
            "Màn hình AOC 25B36X sử dụng tấm nền IPS với góc nhìn rộng 178°, giúp màu sắc và độ tương phản ổn định ở nhiều góc nhìn khác nhau. Kích thước 25 inch cùng độ phân giải Full HD mang lại không gian làm việc rộng và hình ảnh sắc nét. Màn hình có độ sáng 250 nits, phù hợp cho môi trường văn phòng và gia đình. Ngoài ra, màn hình hiển thị 16.7 triệu màu và độ phủ sRGB >99%, cho màu sắc sống động, đáp ứng tốt nhu cầu làm việc, giải trí và thiết kế đồ họa nhẹ.",
          image: "../assets/img/monitor/25b36x/aoc-2.png",
        },
        {
          title: "Trải nghiệm liền mạch và thoải mái trong nhiều giờ liền",
          content:
            "Hiện tượng xé hình là một trong những yếu tố gây mất tập trung nhất khi chơi game. Với công nghệ Adaptive Sync, màn hình sẽ đồng bộ hóa tần số quét với tốc độ khung hình của card đồ họa, mang đến một trải nghiệm chơi game mượt mà, không bị gián đoạn.",
          image: "../assets/img/monitor/25b36x/aoc-3.png",
        },
        {
          title: "Ứng dụng công nghệ Anti-Glare hiện đại",
          content:
            "Nhớ ứng dụng công nghệ Anti-Glare trên màn hình MSI MP251 E2, bạn có thể yên tâm tận hưởng hình ảnh sắc nét, rõ ràng trong mọi môi trường ánh sáng khác nhau. Không chỉ vậy, màn hình còn quan tâm đến sức khỏe đôi mắt của người dùng với công nghệ Eye-Q Check. Tính năng này sẽ nhắc nhở bạn nghỉ ngơi hợp lý sau thời gian dài sử dụng liên tục. Cùng với đó, công nghệ độc quyền EyesErgo từ MSI sẽ chăm sóc toàn diện cho đôi mắt, mang đến sự thoải mái tối đa trong suốt quá trình bạn làm việc và giải trí. ",
          image: "../assets/img/monitor/25b36x/aoc-4.png",
        },
      ],
    },

    brandInfo: {
      brand: "AOC",
      model: "25B36X",
      color: "Đen",
      weight: "2.5kg",
      ports: "HDMI, USB-A, Jack 3.5mm",
    },
  },
  {
    id: 43,
    name: "Màn hình ASUS VY249HGR 24'' IPS 120Hz viền mỏng",
    category: "monitor",
    subCategory: "",
    brand: "ASUS",

    rating: 5,
    reviewCount: 15,

    price: 2250000,
    oldPrice: 3090000,
    discount: "-27%",
    quantity: 1,

    images: [
      "../assets/img/monitor/asus-vy249hgr/a-1.jpg",
      "../assets/img/monitor/asus-vy249hgr/a-2.jpg",
      "../assets/img/monitor/asus-vy249hgr/a-3.jpg",
      "../assets/img/monitor/asus-vy249hgr/a-4.jpg",
      "../assets/img/monitor/asus-vy249hgr/a-5.jpg",
    ],

    highlightSpecs: {
      cpu: null,
      gpu: null,
      ram: null,
      ssd: null,
      main: null,
      screen: null,
      battery: null,
      connect: null,
      feature: null,
      layout: null,
      keycap: null,
      panel: "IPS",
      size: "24 inch",
      hz: "120Hz",
    },

    description: {
      intro: "",

      sections: [
        {
          title: "Ngoại hình ấn tượng, hiệu năng vượt trội",
          content:
            "Màn hình ASUS VY279HGR có thiết kế viền mỏng hiện đại, tấm nền IPS góc nhìn 178° cho hình ảnh sắc nét. Độ phân giải Full HD và tần số quét 120Hz mang lại chuyển động mượt mà, trong khi Adaptive-Sync giúp giảm hiện tượng xé hình khi chơi game.",
          image: "../assets/img/monitor/asus-vy249hgr/a-1.jpg",
        },
        {
          title: "Tính năng đa dạng, đáp ứng mọi nhu cầu",
          content:
            "Màn hình ASUS VY279HGR được trang bị nhiều tính năng tiện ích với các cổng kết nối HDMI, DisplayPort, USB-A, giúp dễ dàng kết nối nhiều thiết bị. Ngoài ra, màn hình còn có nhiều chế độ hiển thị, phù hợp cho cả làm việc và giải trí.",
          image: "../assets/img/monitor/asus-vy249hgr/a-6.jpg",
        },
        {
          title: "Kết nối linh hoạt",
          content:
            "ASUS VY279HGR được trang bị đầy đủ các cổng kết nối phổ biến, bao gồm HDMI, VGA, jack tai nghe. Màn hình cũng hỗ trợ nhiều chế độ âm thanh, đáp ứng đa dạng nhu cầu sử dụng.",
          image: "../assets/img/monitor/asus-vy249hgr/a-8.jpg",
        },
        {
          title: "Công nghệ bảo vệ mắt tiên tiến",
          content:
            "ASUS VY279HGR được trang bị công nghệ bảo vệ mắt tiên tiến, giúp giảm thiểu mỏi mắt và căng thẳng khi sử dụng trong thời gian dài. Tính năng này đảm bảo người dùng luôn có trải nghiệm thoải mái khi làm việc hoặc giải trí.",
          image: "../assets/img/monitor/asus-vy249hgr/a-5.jpg",
        },
      ],
    },

    brandInfo: {
      brand: "ASUS",
      model: "VY249HGR",
      color: "Đen",
      weight: "2.5kg",
      ports: "HDMI, USB-A, Jack 3.5mm",
    },
  },
  {
    id: 44,
    name: "Màn hình ASUS VY249HGR 24'' IPS 120Hz viền mỏng",
    category: "monitor",
    subCategory: "",
    brand: "ASUS",

    rating: 5,
    reviewCount: 15,

    price: 2490000,
    oldPrice: 3390000,
    discount: "-27%",
    quantity: 1,

    images: [
      "../assets/img/monitor/viewsn/v-1.png",
      "../assets/img/monitor/viewsn/v-2.jpg",
      "../assets/img/monitor/viewsn/v-3.jpg",
      "../assets/img/monitor/viewsn/v-4.jpg",
      "../assets/img/monitor/viewsn/v-5.png",
    ],

    highlightSpecs: {
      cpu: null,
      gpu: null,
      ram: null,
      ssd: null,
      main: null,
      screen: null,
      battery: null,
      connect: null,
      feature: null,
      layout: null,
      keycap: null,
      panel: "IPS",
      size: "24 inch",
      hz: "180Hz",
    },

    description: {
      intro:
        "Trong thế giới công nghệ hiện đại, việc lựa chọn màn hình phù hợp giúp nâng cao trải nghiệm sử dụng, đặc biệt với game thủ. Hãy cùng GEARVN khám phá ViewSonic VX2479-HD-PRO – màn hình 24 inch IPS, 180Hz được thiết kế dành cho gaming, mang lại trải nghiệm mượt mà và tối ưu trong các trận đấu.",
      sections: [
        {
          title: "Bảo vệ đôi mắt bạn",
          content:
            "Ánh sáng xanh từ màn hình máy tính có thể gây hại cho mắt nếu sử dụng trong thời gian dài. Màn hình ViewSonic tích hợp công nghệ Blue Light Filter giúp lọc bớt ánh sáng xanh có hại, mang lại cảm giác thoải mái cho mắt ngay cả khi bạn sử dụng lâu dài. Đây là một tính năng không thể thiếu cho bất kỳ bàn làm việc nào, đặc biệt là đối với những người thường xuyên làm việc với máy tính.",
          image: "../assets/img/monitor/viewsn/v-1.png",
        },
        {
          title: "Nâng cao tầm nhìn trong game",
          content:
            "Màn hình ViewSonic VX2479-HD-PRO có chế độ Black Stabilization giúp làm sáng vùng tối để dễ phát hiện kẻ địch, cùng tính năng Crosshair hiển thị tâm ngắm hỗ trợ bắn chính xác hơn trong game FPS, giúp game thủ cải thiện phản xạ và hiệu quả chiến đấu.",
          image: "../assets/img/monitor/viewsn/v-2.jpg",
        },
        {
          title: "Phản ứng nhanh hơn",
          content:
            "Màn hình ViewSonic VX2479-HD-PRO 24'' IPS 180Hz được trang bị công nghệ phản hồi nhanh, giúp giảm thiểu độ trễ và mang lại trải nghiệm chơi game mượt mà hơn. Tính năng này đặc biệt phù hợp với các game đòi hỏi tốc độ và phản xạ nhanh.",
          image: "../assets/img/monitor/viewsn/v-3.jpg",
        },
        {
          title: "Kết nối đa dạng",
          content:
            "Màn hình ViewSonic VX2479-HD-PRO 24'' IPS 180Hz được trang bị nhiều cổng kết nối hiện đại, bao gồm HDMI, USB-A và Jack 3.5mm, giúp bạn dễ dàng kết nối với các thiết bị ngoại vi như máy tính, điện thoại thông minh và loa di động. Tính năng này mang lại sự tiện lợi và linh hoạt trong việc sử dụng màn hình trong nhiều tình huống khác nhau.",
          image: "../assets/img/monitor/viewsn/v-4.jpg",
        },
      ],
    },
    brandInfo: {
      brand: "AOC",
      model: "25B36X",
      color: "Đen",
      weight: "2.5kg",
      ports: "HDMI, USB-A, Jack 3.5mm",
    },
  },
  {
    id: 45,
    name: "Màn hình Asus TUF GAMING VG249QE5A-R 24'' IPS 146Hz chuyên game",
    category: "monitor",
    subCategory: "",
    brand: "ASUS",

    rating: 5,
    reviewCount: 15,

    price: 2590000,
    oldPrice: 3990000,
    discount: "-27%",
    quantity: 1,

    images: [
      "../assets/img/monitor/TUF/t-1.jpg",
      "../assets/img/monitor/TUF/t-2.png",
      "../assets/img/monitor/TUF/t-3.png",
      "../assets/img/monitor/TUF/t-4.png",
      "../assets/img/monitor/TUF/t-5.jpg",
    ],

    highlightSpecs: {
      cpu: null,
      gpu: null,
      ram: null,
      ssd: null,
      main: null,
      screen: null,
      battery: null,
      connect: null,
      feature: null,
      layout: null,
      keycap: null,
      panel: "IPS",
      size: "24 inch",
      hz: "120Hz",
    },

    description: {
      intro: "",

      sections: [
        {
          title: "Thiết kế công thái học với nét gaming hoàn hảo",
          content:
            "Màn hình ASUS TUF Gaming VG249QE5A-R mang thiết kế mạnh mẽ, hầm hố đặc trưng của dòng ASUS TUF Gaming, với các đường nét và nút bấm được hoàn thiện nổi bật, phù hợp cho góc setup gaming hoặc làm việc ấn tượng.",
          image: "../assets/img/monitor/tuf/t-1.jpg",
        },
        {
          title: "Tần số quét 146Hz độc nhất",
          content:
            "Màn hình ASUS TUF Gaming VG249QE5A-R có tần số quét 146Hz (ép xung), mang lại chuyển động mượt mà hơn so với 60–144Hz, giúp giảm lag và nhòe hình khi chơi game hoặc xem phim.",
          image: "../assets/img/monitor/tuf/t-2.png",
        },
        {
          title: "Hướng đến sự mượt mà trong từng khung hình",
          content:
            "Hỗ trợ thêm vào khả năng hiển thị đó là công nghệ AdaptiveSync, ASUS TUF Gaming VG249QE5A-R mang đến những hình ảnh siêu mượt cho những chi tiết lý tưởng nhất. Những hình ảnh hiển thị được giảm thiểu tình trạng răng cưa và tình trạng xé màn hình khó chịu.",
          image: "../assets/img/monitor/tuf/t-3.png",
        },
        {
          title: "Tương thích tuyệt vời cùng những cấu hình gaming",
          content:
            "Màn hình ASUS TUF Gaming VG249QE5A-R được trang bị công nghệ ASUS Variable Overdrive, giúp tự động điều chỉnh theo tốc độ khung hình của card đồ họa, đảm bảo hình ảnh luôn ổn định và mượt mà khi chơi game",
          image: "../assets/img/monitor/tuf/t-4.png",
        },
      ],
    },

    brandInfo: {
      brand: "ASUS",
      model: "TUF Gaming VG249QE5A-R",
      color: "Đen",
      weight: "2.5kg",
      ports: "HDMI, USB-A, Jack 3.5mm",
    },
  },
  {
    id: 46,
    name: "Màn hình Philips 27E2N1500L 27''IPS 2K 75Hz",
    category: "monitor",
    subCategory: "",
    brand: "Philips",

    rating: 5,
    reviewCount: 15,

    price: 2790000,
    oldPrice: 3590000,
    discount: "-27%",
    quantity: 1,

    images: [
      "../assets/img/monitor/plip/p-1.jpg",
      "../assets/img/monitor/plip/p-2.png",
      "../assets/img/monitor/plip/p-3.png",
      "../assets/img/monitor/plip/p-4.png",
      "../assets/img/monitor/plip/p-5.png",
    ],

    highlightSpecs: {
      cpu: null,
      gpu: null,
      ram: null,
      ssd: null,
      main: null,
      screen: null,
      battery: null,
      connect: null,
      feature: null,
      layout: null,
      keycap: null,
      panel: "IPS",
      size: "24 inch",
      hz: "146Hz",
    },

    description: {
      intro: "",

      sections: [
        {
          title:
            "Trải nghiệm hình ảnh sắc nét đến từng chi tiết với độ phân giải 2K",
          content:
            "Màn hình Philips 27E2N1500L mang đến trải nghiệm hình ảnh sắc nét đến từng chi tiết với độ phân giải 2K, giúp bạn cảm nhận rõ ràng hơn về màu sắc và chi tiết trong mọi hoạt động.",
          image: "../assets/img/monitor/plip/p-1.jpg",
        },
        {
          title:
            "Chuyển động mượt mà và màu sắc sống động cho mọi nhu cầu giải trí",
          content:
            "Với tần số quét 75Hz, màn hình Philips 27E2N1500L mang lại chuyển động mượt mà và màu sắc sống động, giúp bạn đắm chìm trong thế giới giải trí của mình.",
          image: "../assets/img/monitor/plip/p-5.png",
        },
        {
          title: "Bảo vệ đôi mắt của bạn trong suốt ngày dài làm việc",
          content:
            "Màn hình Philips 27E2N1500L được trang bị công nghệ chống mỏi mắt, giúp bảo vệ đôi mắt của bạn trong suốt ngày dài làm việc.",
          image: "../assets/img/monitor/plip/p-3.png",
        },
        {
          title: "Tương thích tuyệt vời cùng những cấu hình gaming",
          content:
            "Màn hình Philips 27E2N1500L được trang bị các cổng kết nối đa dạng, giúp bạn dễ dàng kết nối với các thiết bị gaming của mình.",
          image: "../assets/img/monitor/plip/p-4.png",
        },
      ],
    },

    brandInfo: {
      brand: "Philips",
      model: "27E2N1500L",
      color: "Đen",
      weight: "2.5kg",
      ports: "HDMI, USB-A, Jack 3.5mm",
    },
  },
  {
    id: 47,
    name: "Màn hình LG 27U411A-B 27'' IPS 120Hz HDR10 siêu mỏng",
    category: "monitor",
    subCategory: "",
    brand: "LG",

    rating: 5,
    reviewCount: 15,

    price: 2250000,
    oldPrice: 3090000,
    discount: "-27%",
    quantity: 1,

    images: [
      "../assets/img/monitor/lg-27/l-1.jpg",
      "../assets/img/monitor/lg-27/l-2.png",
      "../assets/img/monitor/lg-27/l-3.png",
      "../assets/img/monitor/lg-27/l-4.png",
      "../assets/img/monitor/lg-27/l-5.png",
    ],

    highlightSpecs: {
      cpu: null,
      gpu: null,
      ram: null,
      ssd: null,
      main: null,
      screen: null,
      battery: null,
      connect: null,
      feature: null,
      layout: null,
      keycap: null,
      panel: "IPS",
      size: "2 inch",
      hz: "120Hz",
    },

    description: {
      intro: "",

      sections: [
        {
          title: "Chuyển động mượt mà vượt trội với tần số quét 120Hz",
          content:
            "Với tần số quét 120Hz, màn hình LG 27U411A-B mang lại chuyển động mượt mà và sắc nét, giúp bạn cảm nhận rõ ràng hơn về từng chi tiết trong mọi hoạt động.",
          image: "../assets/img/monitor/lg-27/l-1.jpg",
        },
        {
          title: "Tái hiện hình ảnh sắc nét và màu sắc sống động",
          content:
            "Với công nghệ IPS, màn hình LG 27U411A-B tái hiện hình ảnh sắc nét và màu sắc sống động, giúp bạn cảm nhận rõ ràng hơn về từng chi tiết trong mọi hoạt động.",
          image: "../assets/img/monitor/lg-27/l-2.png",
        },
        {
          title: "Thiết kế hiện đại, tối ưu cho mọi không gian",
          content:
            "Màn hình LG 27U411A-B được thiết kế hiện đại, tối ưu cho mọi không gian, giúp bạn dễ dàng tích hợp vào môi trường làm việc hoặc giải trí của mình.",
          image: "../assets/img/monitor/lg-27/l-3.png",
        },
        {
          title: "Nâng cao hiệu suất và bảo vệ mắt toàn diện",
          content:
            "Màn hình LG 27U411A-B được trang bị công nghệ chống mỏi mắt, giúp bảo vệ đôi mắt của bạn trong suốt ngày dài làm việc.",
          image: "../assets/img/monitor/lg-27/l-4.png",
        },
      ],
    },

    brandInfo: {
      brand: "LG",
      model: "27U411A-B",
      color: "Đen",
      weight: "2.5kg",
      ports: "HDMI, USB-A, Jack 3.5mm",
    },
  },
  {
    id: 48,
    name: "Màn hình ViewSonic VX2479A-HD-PRO 24'' IPS 240Hz 1ms chuyên game",
    category: "monitor",
    subCategory: "",
    brand: "ViewSonic",

    rating: 5,
    reviewCount: 15,

    price: 2790000,
    oldPrice: 4490000,
    discount: "-38%",
    quantity: 1,

    images: [
      "../assets/img/monitor/viewsn-2/vs-1.jpg",
      "../assets/img/monitor/viewsn-2/vs-2.jpg",
      "../assets/img/monitor/viewsn-2/vs-3.jpg",
      "../assets/img/monitor/viewsn-2/vs-4.jpg",
      "../assets/img/monitor/viewsn-2/vs-5.jpg",
    ],

    highlightSpecs: {
      cpu: null,
      gpu: null,
      ram: null,
      ssd: null,
      main: null,
      screen: null,
      battery: null,
      connect: null,
      feature: null,
      layout: null,
      keycap: null,
      panel: "IPS",
      size: "24 inch",
      hz: "240Hz",
    },

    description: {
      intro: "",

      sections: [
        {
          title: "Sở hữu thiết kế linh hoạt, hiện đại",
          content:
            "Màn hình ViewSonic VX2479A-HD-PRO được thiết kế linh hoạt, hiện đại, phù hợp với nhiều không gian khác nhau.",
          image: "../assets/img/monitor/viewsn-2/vs-1.jpg",
        },
        {
          title: "Trải nghiệm hình ảnh sống động với góc nhìn 178 độ",
          content:
            "Với góc nhìn 178 độ, màn hình ViewSonic VX2479A-HD-PRO giúp bạn tận hưởng hình ảnh sắc nét từ mọi góc độ.",
          image: "../assets/img/monitor/viewsn-2/vs-2.jpg",
        },
        {
          title: "Thời gian phản hồi nhanh chóng với 240Hz",
          content:
            "Với tần số quét 240Hz, màn hình ViewSonic VX2479A-HD-PRO mang lại trải nghiệm mượt mà, đặc biệt phù hợp cho game thủ.",
          image: "../assets/img/monitor/viewsn-2/vs-3.jpg",
        },
        {
          title: "Hạn chế hiện tượng bóng mờ",
          content:
            "Màn hình ViewSonic VX2479A-HD-PRO được trang bị công nghệ chống bóng mờ, giúp bạn tận hưởng hình ảnh sắc nét và rõ ràng hơn.",
          image: "../assets/img/monitor/viewsn-2/vs-5.jpg",
        },
      ],
    },

    brandInfo: {
      brand: "ViewSonic",
      model: "VX2479A-HD-PRO",
      color: "Đen",
      weight: "2.5kg",
      ports: "HDMI, USB-A, Jack 3.5mm",
    },
  },
  {
    id: 49,
    name: "Màn hình E-DRA EGM25F260PVS 25'' IPS 260Hz chuyên game",
    category: "monitor",
    subCategory: "",
    brand: "E-DRA",

    rating: 5,
    reviewCount: 15,

    price: 2890000,
    oldPrice: 2990000,
    discount: "-9%",
    quantity: 1,

    images: [
      "../assets/img/monitor/edra-25/e-1.jpg",
      "../assets/img/monitor/edra-25/e-2.jpg",
      "../assets/img/monitor/edra-25/e-3.png",
      "../assets/img/monitor/edra-25/e-4.png",
      "../assets/img/monitor/edra-25/e-5.png",
    ],

    highlightSpecs: {
      cpu: null,
      gpu: null,
      ram: null,
      ssd: null,
      main: null,
      screen: null,
      battery: null,
      connect: null,
      feature: null,
      layout: null,
      keycap: null,
      panel: "IPS",
      size: "25 inch",
      hz: "260Hz",
    },

    description: {
      intro: "",

      sections: [
        {
          title: "Tần số quét 260Hz đỉnh cao",
          content:
            "Màn hình E-DRA EGM25F260PVS sở hữu tần số quét 260Hz, mang lại trải nghiệm mượt mà và phản hồi nhanh chóng cho game thủ.",
          image: "../assets/img/monitor/edra-25/e-1.jpg",
        },
        {
          title: "FAST IPS chất lượng vượt trội",
          content:
            "Màn hình E-DRA EGM25F260PVS được trang bị panel FAST IPS, mang lại màu sắc chính xác và thời gian phản hồi nhanh chóng.",
          image: "../assets/img/monitor/edra-25/e-6.png",
        },
        {
          title: "Kết nối hiện đại kèm phụ kiện",
          content:
            "Màn hình E-DRA EGM25F260PVS được trang bị các cổng kết nối hiện đại, giúp bạn dễ dàng kết nối với các thiết bị khác.",
          image: "../assets/img/monitor/edra-25/e-3.png",
        },
        {
          title: "Thiết kế gọn nhẹ gaming",
          content:
            "Với thiết kế gọn nhẹ, màn hình E-DRA EGM25F260PVS phù hợp với không gian làm việc hiện đại và nhu cầu gaming.",
          image: "../assets/img/monitor/edra-25/e-4.png",
        },
      ],
    },

    brandInfo: {
      brand: "E-DRA",
      model: "EGM25F260PVS",
      color: "Đen",
      weight: "2.5kg",
      ports: "HDMI, USB-A, Jack 3.5mm",
    },
  },
  {
    id: 50,
    name: "Màn hình MSI MAG 274QF X24 27'' Rapid IPS 2K 240Hz chuyên game",
    category: "monitor",
    subCategory: "",
    brand: "MSI",

    rating: 5,
    reviewCount: 15,

    price: 5490000,
    oldPrice: 6990000,
    discount: "-21%",
    quantity: 1,

    images: [
      "../assets/img/monitor/msi-mag/m-1.jpg",
      "../assets/img/monitor/msi-mag/m-2.png",
      "../assets/img/monitor/msi-mag/m-3.png",
      "../assets/img/monitor/msi-mag/m-4.png",
      "../assets/img/monitor/msi-mag/m-5.png",
    ],

    highlightSpecs: {
      cpu: null,
      gpu: null,
      ram: null,
      ssd: null,
      main: null,
      screen: null,
      battery: null,
      connect: null,
      feature: null,
      layout: null,
      keycap: null,
      panel: "IPS",
      size: "27 inch",
      hz: "240Hz",
    },

    description: {
      intro: "",

      sections: [
        {
          title: "Tần số quét 240Hz và thời gian phản hồi 0.5ms",
          content:
            "Màn hình MSI MAG 274QF X24 sở hữu tần số quét 240Hz và thời gian phản hồi chỉ 0.5ms, mang lại trải nghiệm chơi game mượt mà và nhạy bén.",
          image: "../assets/img/monitor/msi-mag/m-1.jpg",
        },
        {
          title: "Hình ảnh sống động, sắc nét với tấm nền Rapid IPS 2K",
          content:
            "Với tấm nền Rapid IPS 2K, màn hình MSI MAG 274QF X24 mang lại hình ảnh sống động và sắc nét, giúp người dùng tận hưởng trải nghiệm thị giác tuyệt vời.",
          image: "../assets/img/monitor/msi-mag/m-2.png",
        },
        {
          title: "Công nghệ AI Vision",
          content:
            "Công nghệ AI Vision giúp tối ưu hóa hình ảnh và màu sắc, mang lại trải nghiệm xem video và chơi game tuyệt vời.",
          image: "../assets/img/monitor/msi-mag/m-3.png",
        },
        {
          title: "MD FreeSync Premium loại bỏ hiện tượng xé hình, giật lag",
          content:
            "Công nghệ MD FreeSync Premium giúp loại bỏ hiện tượng xé hình và giật lag, mang lại trải nghiệm chơi game mượt mà và liền mạch.",
          image: "../assets/img/monitor/msi-mag/m-4.png",
        },
      ],
    },

    brandInfo: {
      brand: "MSI",
      model: "MAG 274QF X24",
      color: "Đen",
      weight: "2.5kg",
      ports: "HDMI, USB-A, Jack 3.5mm",
    },
  },
  // Chuột
  {
    id: 51,
    name: "Chuột Gaming không dây Logitech G304 Lightspeed",
    category: "mouse",
    subCategory: "gaming",
    brand: "Logitech",

    rating: 5,
    reviewCount: 15,

    price: 725000,
    oldPrice: 949000,
    discount: "-24%",
    quantity: 15,

    images: [
      "../assets/img/mouse//chuot-gaming-khong-day-logitech-g304-lightspeed-1.png",
      "../assets/img/mouse//chuot-gaming-khong-day-logitech-g304-lightspeed-2.png",
      "../assets/img/mouse//chuot-gaming-khong-day-logitech-g304-lightspeed-3.png",
      "../assets/img/mouse//chuot-gaming-khong-day-logitech-g304-lightspeed-4.png",
      "../assets/img/mouse//chuot-gaming-khong-day-logitech-g304-lightspeed-5.png",
    ],

    highlightSpecs: {
      cpu: "Windows® 7 trở lên macOS 10.13 trở lên ChromeOS",
      gpu: "200 - 12000 DPI",
      ram: "Không", // Đèn led
      ssd: null,
      main: null,
      screen: null,
      battery: "250 Giờ",
      connect: "LIGHTSPEED không dây",
      feature: "2000Hz Polling",
      layout: null,
      keycap: null,
      panel: null,
      size: "11.66 x 6.215 x 3.82 cm",
      hz: null,
    },

    description: {
      intro:
        "Chuột gaming không dây Logitech G304 Lightspeed - Thương hiệu dành cho các gaming",

      sections: [
        {
          title: "Thiết kế đột phá, nổi bật với nhiều nút lập trình",
          content:
            "Chuột gaming không dây Logitech G304 Lightspeed được nhà sản xuất gia công vô cùng tỉ mỉ với tiêu chí là đặt nhu cầu của người sử dụng hàng đầu. Chuột sở hữu 6 nút lập trình chính giữa và ở cả 2 bên. Các nút kích chuột chính vô cùng bền bỉ với khả năng 10 triệu lần nhấp chuột.Bên cạnh đó, hệ thống hút lực cho các nút cơ học của chuột không dây G304 hoàn toàn tách biệt giúp nâng cao được sự ổn định của các nút phải và trái và giảm tối đa lực tác dụng khi sử dụng chuột. Điều đó mang lại cho người dùng những thao tác nhanh chóng ngay cả trong những trận game căng thẳng.",
          image:
            "../assets/img/mouse//chuot-gaming-khong-day-logitech-g304-lightspeed-1.png",
        },
        {
          title: "Thời lượng pin lớn, mắt cảm biến Hero",
          content:
            "Chuột gaming không dây Logitech G304 Lightspeed là một trong những chiếc chuột không dây mang đến thời lượng pin sử dụng vượt trội so với các sản phẩm cùng phân khúc. Chuột mang lại cho người dùng 250h sử dụng chỉ với một chiếc pin AA.Ngoài ra, chuột còn sở hữu công nghệ cảm biến Hero có khả năng mang đến các thao tác click chuột mượt mà, tăng tốc với hiệu suất đỉnh cao nhưng vẫn có thể tiết kiệm năng lượng tối ưu.",
          image:
            "../assets/img/mouse//chuot-gaming-khong-day-logitech-g304-lightspeed-3.png",
        },
        {
          title:
            "Sở hữu ngay chuột gaming không dây Logitech G304 Lightspeed chính hãng tại PC WORLD",
          content:
            "Còn chần chừ gì nữa mà không nhanh chân đến ngay với cửa hàng PC WORLD để sở hữu ngay chuột gaming không dây Logitech G304 Lightspeed chính hãng với giá cực kì ưu đãi đến từ cửa hàng.",
          image:
            "../assets/img/mouse//chuot-gaming-khong-day-logitech-g304-lightspeed-4.png",
        },
      ],
    },

    brandInfo: {
      brand: "Logitech",
      model: "G304 Lightspeed",
      color: "Đen",
      weight: "99g",
      ports: "LIGHTSPEED không dây",
    },
  },
  {
    id: 52,
    name: "Chuột gaming Logitech Pro X Superlight 2 Lightspeed",
    category: "mouse",
    subCategory: "gaming",
    brand: "Logitech",

    rating: 5,
    reviewCount: 15,

    price: 3190000,
    oldPrice: 3890000,
    discount: "-18%",
    quantity: 13,

    images: [
      "../assets/img/mouse//chuot-gaming-logitech-pro-x-superlight-2-lightspeed-1.png",
      "../assets/img/mouse//chuot-gaming-logitech-pro-x-superlight-2-lightspeed-2.png",
      "../assets/img/mouse//chuot-gaming-logitech-pro-x-superlight-2-lightspeed-3.png",
      "../assets/img/mouse//chuot-gaming-logitech-pro-x-superlight-2-lightspeed-4.png",
      "../assets/img/mouse//chuot-gaming-logitech-pro-x-superlight-2-lightspeed-5.png",
    ],

    highlightSpecs: {
      cpu: "Windows® 10 trở lên và cổng USB 2.0",
      gpu: "100 – 44,000 DPI",
      ram: "Không", // Đèn led
      ssd: null,
      main: null,
      screen: null,
      battery: "95 giờ",
      connect: "USB receiver",
      feature: "2000Hz Polling",
      layout: null,
      keycap: null,
      panel: null,
      size: "12.5 x 6.35 x 4 cm",
      hz: null,
    },

    description: {
      intro:
        "Chuột Gaming Logitech Pro X Superlight 2 Lightspeed – Hạn chế ma sát, tăng cường trải nghiệm",

      sections: [
        {
          title: "Thiết kế tiên tiến, tuổi thọ cao",
          content:
            "Chuột Gaming Logitech Pro X Superlight 2 Lightspeed có kiểu dáng phù hợp với mọi dáng tay qua đường cong mềm mại. Với trọng lượng chưa tới 63 gram, dòng chuột này được đánh giá cao trong việc di chuyển khi sử dụng. Ngoài chất liệu PTFE bền bỉ, phiên bản còn sở hữu tuổi thọ cực cao với thời lượng lên đến 70 giờ.",
          image:
            "../assets/img/mouse//chuot-gaming-logitech-pro-x-superlight-2-lightspeed-1.png",
        },
        {
          title: "Công nghệ đẳng cấp, biểu hiện chính xác",
          content:
            "Thông qua công nghệ Lightspeed không dây, chuột Gaming Logitech Pro X Superlight 2 Lightspeed tự tin thể hiện tốc độ di chuyển mượt mà và chính xác. Bên cạnh đó, phiên bản còn hỗ trợ POWERPLAY không dây nhanh chóng để tối ưu nhu cầu của người dùng.Với cảm biến Hero 2 có độ phân giải 25.600 DPI cùng các phím switch quang học, bạn có thể trải nghiệm chuột ổn định và hiệu quả mà không lo ảnh hưởng đến dung lượng pin.",
          image:
            "../assets/img/mouse//chuot-gaming-logitech-pro-x-superlight-2-lightspeed-3.png",
        },
        {
          title:
            "Mua ngay chuột Gaming Logitech Pro X Superlight 2 Lightspeed chính hãng tại PC WORLD",
          content:
            "Chuột Gaming Logitech Pro X Superlight 2 Lightspeed rất thích hợp để đồng hành cùng bạn trong những giây phút làm việc hay giải trí. Ghé PC WORLD để rinh sản phẩm chất lượng kèm mức giá siêu rẻ nhé.",
          image:
            "../assets/img/mouse//chuot-gaming-logitech-pro-x-superlight-2-lightspeed-4.png",
        },
      ],
    },

    brandInfo: {
      brand: "Logitech",
      model: "Pro X Superlight 2 Lightspeed",
      color: "Hồng",
      weight: "66g",
      ports: "USB receiver",
    },
  },
  {
    id: 53,
    name: "Chuột Gaming Razer Basilisk V3 35K (RZ01-05230100-R3M1)",
    category: "mouse",
    subCategory: "gaming",
    brand: "Razer",

    rating: 5,
    reviewCount: 15,

    price: 2290000,
    oldPrice: 2990000,
    discount: "-30%",
    quantity: 16,

    images: [
      "../assets/img/mouse//chuot-gaming-razer-basilisk-v3-35k-rz01-1.png",
      "../assets/img/mouse//chuot-gaming-razer-basilisk-v3-35k-rz01-2.png",
      "../assets/img/mouse//chuot-gaming-razer-basilisk-v3-35k-rz01-3.png",
      "../assets/img/mouse//chuot-gaming-razer-basilisk-v3-35k-rz01-4.png",
      "../assets/img/mouse//chuot-gaming-razer-basilisk-v3-35k-rz01-5.png",
    ],

    highlightSpecs: {
      cpu: "Windows 10/11, MacOS",
      gpu: "35000 DPI",
      ram: "Razer Chroma RGB (11-Zone)", // Đèn led
      ssd: null,
      main: null,
      screen: null,
      battery: "250 Giờ",
      connect: "Wired USB-A",
      feature: "2000Hz Polling",
      layout: null,
      keycap: null,
      panel: null,
      size: "13.00 x 7.54 x 4.25 cm",
      hz: null,
    },

    description: {
      intro:
        "Chuột Gaming Razer Basilisk V3 35K RZ01 05230100 R3M1 - Đẳng cấp gaming hàng đầu",

      sections: [
        {
          title: "Cuộn lăn 4 chiều độc đáo",
          content:
            "Để có được khả năng di chuyển linh hoạt mẫu chuột không dây này sử dụng Razer HyperScroll Tilt cùng 3 chế độ đi kèm. Ngoài ra nhờ kết nối không dây, chuột có độ trễ cực thấp hoàn toàn đáp ứng tốt nhu cầu trên cả những tựa game FPS.",
          image:
            "../assets/img/mouse//chuot-gaming-razer-basilisk-v3-35k-rz01-1.png",
        },
        {
          title: "Thỏa sức tùy chỉnh",
          content:
            "Thông qua phần mềm Synapse bạn có thể tùy chỉnh đến 13 phím macro trên chuột Gaming Razer Basilisk V3 35K RZ01 05230100 R3M1 để có thể thao tác nhanh hơn. Cùng với đó chuột cũng được trang bị hệ thống led RGB Chroma rực rỡ giúp bộ gaming gear của bạn trở nên ấn tượng.",
          image:
            "../assets/img/mouse//chuot-gaming-razer-basilisk-v3-35k-rz01-2.png",
        },
        {
          title:
            "Mua chuột Gaming Razer Basilisk V3 35K RZ01 05230100 R3M1 chính hãng tại PC WORLD",
          content:
            "Chuột Gaming Razer Basilisk V3 35K RZ01 05230100 R3M1 mang đến khả năng thao tác nhanh chóng, vượt trội giúp game thủ giành lợi thế trong mọi tựa game. Sản phẩm chuột chơi game này hiện đang sẵn hàng tại PC WORLD với mức giá ưu đãi, bạn hãy liên hệ ngay để nhận tư vấn nhé.",
          image:
            "../assets/img/mouse//chuot-gaming-razer-basilisk-v3-35k-rz01-3.png",
        },
      ],
    },

    brandInfo: {
      brand: "Razer",
      model: "Basilisk V3 35K",
      color: "Đen",
      weight: "112g",
      ports: "Wired USB-A",
    },
  },
  {
    id: 54,
    name: "Chuột Gaming không dây Razer Cobra Pro",
    category: "mouse",
    subCategory: "gaming",
    brand: "Razer",

    rating: 5,
    reviewCount: 15,

    price: 2890000,
    oldPrice: 2990000,
    discount: "-3%",
    quantity: 10,

    images: [
      "../assets/img/mouse//chuot-gaming-khong-day-razer-cobra-pro-rz01-1.png",
      "../assets/img/mouse//chuot-gaming-khong-day-razer-cobra-pro-rz01-2.png",
      "../assets/img/mouse//chuot-gaming-khong-day-razer-cobra-pro-rz01-3.png",
      "../assets/img/mouse//chuot-gaming-khong-day-razer-cobra-pro-rz01-4.png",
      "../assets/img/mouse//chuot-gaming-khong-day-razer-cobra-pro-rz01-5.png",
    ],

    highlightSpecs: {
      cpu: "Windows 10/11",
      gpu: "30000 DPI",
      ram: "Razer Chroma RGB", // Đèn led
      ssd: null,
      main: null,
      screen: null,
      battery:
        "Lên đến 100 giờ với HyperSpeed Wireless Lên đến 170 giờ với Bluetooth Lên đến 22 giờ với HyperPolling Wireless Dongle / Mouse Dock Pro 8000Hz",
      connect: "Razer HyperSpeed Wireless (2.4 GHz), Wired USB-A, Bluetooth",
      feature: "2000Hz Polling",
      layout: null,
      keycap: null,
      panel: null,
      size: "11.96 x 6.25 x 3.81 cm",
      hz: null,
    },

    description: {
      intro:
        "Chuột gaming không dây Razer Cobra Pro RZ01 04660100 R3A1 - Kết nối linh hoạt, điều khiển chính xác",

      sections: [
        {
          title: "Hỗ trợ tới 3 kiểu kết nối",
          content:
            "Razer gaming không dây Cobra Pro RZ01 04660100 R3A1 được hỗ trợ tới 3 kiểu kết nối, bao gồm kết nối có dây, wireless và bluetooth. Nhờ đó mà mẫu chuột gaming không dây của Razer này sẽ luôn mang tới sự đa dụng khi có thể ghép nối từ các mẫu PC cho tới các thiết bị di động như laptop, tablet,...",
          image:
            "../assets/img/mouse//chuot-gaming-khong-day-razer-cobra-pro-rz01-1.png",
        },
        {
          title: "DPI cực cao, điều khiển chính xác",
          content:
            "Với độ phân giải 30.000 DPI, chuột gaming không dây Razer Cobra Pro còn có được khả năng tùy chỉnh linh hoạt nhằm có đem đến sự chính xác trong quá trình điều khiển. Ngoài ra, Razer còn trang bị cho mẫu chuột không dây của mình các phím bấm để có thể cài đặt macro. Kèm theo đó là 5 profile thiết lập sẵn để người dùng chủ động lựa chọn sao cho phù hợp nhất với nhu cầu sử dụng.",
          image:
            "../assets/img/mouse//chuot-gaming-khong-day-razer-cobra-pro-rz01-3.png",
        },
        {
          title:
            "Mua chuột gaming không dây Razer Cobra Pro RZ01 04660100 R3A1 giá tốt tại PC WORLD",
          content:
            "Chuột gaming không dây Razer Cobra Pro RZ01 04660100 R3A1 hiện đã có mặt tại mọi cửa hàng PC WORLD ở nhiều tỉnh, thành phố trên cả nước để người dùng tới tham khảo và đặt mua trực tiếp. Với đa dạng chương trình giảm giá, chiết khấu hội viên PCmember, chính sách trả góp không lãi suất,...khách hàng sẽ còn có thể mua được mẫu chuột gaming không dây của Razer này với giá bán cực kỳ hợp lý.",
          image:
            "../assets/img/mouse//chuot-gaming-khong-day-razer-cobra-pro-rz01-4.png",
        },
      ],
    },

    brandInfo: {
      brand: "Razer",
      model: "Cobra Pro RZ01",
      color: "Đen",
      weight: "77g",
      ports: "Razer HyperSpeed Wireless (2.4 GHz), Wired USB-A, Bluetooth",
    },
  },
  {
    id: 55,
    name: "Chuột Gaming không dây Corsair Dark Core RGB Pro SE",
    category: "mouse",
    subCategory: "gaming",
    brand: "Corsair",
    rating: 5,
    reviewCount: 32,
    price: 2490000,
    oldPrice: 2690000,
    discount: "-7%",
    quantity: 15,
    images: [
      "../assets/img/mouse//chuot-gaming-khong-day-corsair-dark-core-1.png",
      "../assets/img/mouse//chuot-gaming-khong-day-corsair-dark-core-2.png",
      "../assets/img/mouse//chuot-gaming-khong-day-corsair-dark-core-3.png",
      "../assets/img/mouse//chuot-gaming-khong-day-corsair-dark-core-4.png",
      "../assets/img/mouse//chuot-gaming-khong-day-corsair-dark-core-5.png",
    ],
    highlightSpecs: {
      cpu: "Windows 10/11, macOS",
      gpu: "18000 DPI",
      ram: "9 vùng LED RGB",
      ssd: null,
      main: null,
      screen: null,
      battery: "Lên đến 50 giờ",
      connect: "Slipstream Wireless, Bluetooth, Wired USB",
      feature: "Sạc không dây Qi",
      layout: null,
      keycap: null,
      panel: null,
      size: "12.7 x 8.9 x 4.3 cm",
      hz: null,
    },
    description: {
      intro:
        "Chuột gaming Corsair Dark Core RGB Pro SE - Công nghệ Slipstream siêu tốc, tích hợp sạc không dây Qi tiện lợi.",
      sections: [
        {
          title: "Độ trễ cực thấp với Slipstream",
          content:
            "Công nghệ Slipstream độc quyền của Corsair mang lại tốc độ phản hồi dưới 1ms, thách thức mọi tựa game FPS try-hard nhất. Click phát ăn ngay, không lo delay.",
          image:
            "../assets/img/mouse//chuot-gaming-khong-day-corsair-dark-core-1.png",
        },
        {
          title: "Sạc không dây Qi chuẩn tương lai",
          content:
            "Hết pin? Chỉ cần đặt nhẹ em nó lên pad chuột có hỗ trợ sạc chuẩn Qi là lại chiến tiếp. Quên đi cái cảnh đang leo rank mà phải lôi dây ra cắm vướng víu.",
          image:
            "../assets/img/mouse//chuot-gaming-khong-day-corsair-dark-core-2.png",
        },
        {
          title: "Thiết kế hầm hố, LED RGB cháy phố",
          content:
            "Form dáng to bản ôm trọn lòng bàn tay cùng 9 vùng LED RGB tha hồ custom qua iCUE. Đảm bảo góc setup của bạn sáng nhất xóm!",
          image:
            "../assets/img/mouse//chuot-gaming-khong-day-corsair-dark-core-3.png",
        },
      ],
    },
    brandInfo: {
      brand: "Corsair",
      model: "Dark Core RGB Pro SE",
      color: "Đen",
      weight: "142g",
      ports: "Wireless 2.4GHz, Bluetooth, USB-C",
    },
  },
  {
    id: 56,
    name: "Chuột Gaming Corsair Harpoon RGB Wireless",
    category: "mouse",
    subCategory: "gaming",
    brand: "Corsair",
    rating: 4.5,
    reviewCount: 45,
    price: 1190000,
    oldPrice: 1390000,
    discount: "-14%",
    quantity: 20,
    images: [
      "../assets/img/mouse//chuot-gaming-corsair-harpoon-wireless-1.png",
      "../assets/img/mouse//chuot-gaming-corsair-harpoon-wireless-2.png",
      "../assets/img/mouse//chuot-gaming-corsair-harpoon-wireless-3.png",
      "../assets/img/mouse//chuot-gaming-corsair-harpoon-wireless-4.png",
      "../assets/img/mouse//chuot-gaming-corsair-harpoon-wireless-5.png",
    ],
    highlightSpecs: {
      cpu: "Windows, macOS",
      gpu: "10000 DPI",
      ram: "LED RGB 1 vùng",
      ssd: null,
      main: null,
      screen: null,
      battery: "Lên đến 60 giờ",
      connect: "Wireless 2.4GHz, Bluetooth, Wired",
      feature: "Form công thái học ôm tay",
      layout: null,
      keycap: null,
      panel: null,
      size: "11.5 x 6.8 x 4.0 cm",
      hz: null,
    },
    description: {
      intro:
        "Corsair Harpoon RGB Wireless - Thiết kế gọn nhẹ, giá mềm cho anh em nhập môn hệ sinh thái Corsair.",
      sections: [
        {
          title: "Nhỏ gọn nhưng có võ",
          content:
            "Chỉ nặng 99g, con chuột này bao lướt mượt mà không lo mỏi cổ tay sau những pha vẩy tâm thần sầu. Rất hợp cho anh em tay vừa và nhỏ.",
          image:
            "../assets/img/mouse//chuot-gaming-corsair-harpoon-wireless-1.png",
        },
        {
          title: "Đa dạng kết nối, quẩy mọi nền tảng",
          content:
            "Chuyển đổi linh hoạt giữa Wireless 2.4GHz siêu tốc, Bluetooth tiết kiệm pin hoặc cắm dây xài trực tiếp. Một con chuột, chiến vạn thiết bị.",
          image:
            "../assets/img/mouse//chuot-gaming-corsair-harpoon-wireless-2.png",
        },
        {
          title: "Build cứng cáp, switch trâu bò",
          content:
            "Switch Omron siêu bền với tuổi thọ hàng chục triệu lần nhấn. Cứ yên tâm mà xả đạn, hỏng sao được mà lo!",
          image:
            "../assets/img/mouse//chuot-gaming-corsair-harpoon-wireless-3.png",
        },
      ],
    },
    brandInfo: {
      brand: "Corsair",
      model: "Harpoon RGB Wireless",
      color: "Đen",
      weight: "99g",
      ports: "Wireless 2.4GHz, Bluetooth",
    },
  },
  {
    id: 57,
    name: "Chuột không dây Microsoft Sculpt Ergonomic",
    category: "mouse",
    subCategory: "office",
    brand: "Microsoft",
    rating: 4.8,
    reviewCount: 112,
    price: 1590000,
    oldPrice: 1790000,
    discount: "-11%",
    quantity: 8,
    images: [
      "../assets/img/mouse//chuot-microsoft-sculpt-ergonomic-1.png",
      "../assets/img/mouse//chuot-microsoft-sculpt-ergonomic-2.png",
      "../assets/img/mouse//chuot-microsoft-sculpt-ergonomic-3.png",
      "../assets/img/mouse//chuot-microsoft-sculpt-ergonomic-4.png",
      "../assets/img/mouse//chuot-microsoft-sculpt-ergonomic-5.png",
    ],
    highlightSpecs: {
      cpu: "Windows, macOS",
      gpu: "1000 DPI",
      ram: "Không LED",
      ssd: null,
      main: null,
      screen: null,
      battery: "Lên đến 12 tháng (Pin AA)",
      connect: "Wireless 2.4 GHz (USB Dongle)",
      feature: "Nút Windows chuyên dụng, cuộn 4 chiều",
      layout: null,
      keycap: null,
      panel: null,
      size: "9.8 x 7.5 x 5.7 cm",
      hz: null,
    },
    description: {
      intro:
        "Microsoft Sculpt Ergonomic - Cứu tinh cho dân code cày cuốc ngày đêm, chống đau mỏi cổ tay cực đỉnh.",
      sections: [
        {
          title: "Thiết kế dị nhưng xài siêu cuốn",
          content:
            "Cái dáng tròn tròn như củ khoai tây này thực chất lại nâng đỡ cổ tay cực kỳ khoa học. Đẩy lùi hội chứng ống cổ tay cho dân văn phòng chính hiệu.",
          image: "../assets/img/mouse//chuot-microsoft-sculpt-ergonomic-1.png",
        },
        {
          title: "Nút cuộn 4 chiều thần thánh",
          content:
            "Không chỉ cuộn dọc, lướt ngang bảng tính Excel hay vuốt timeline Premiere chưa bao giờ mượt đến thế. Trải nghiệm vuốt chạm xứng đáng điểm 10.",
          image: "../assets/img/mouse//chuot-microsoft-sculpt-ergonomic-2.png",
        },
        {
          title: "Phím Windows chạm là yêu",
          content:
            "Tích hợp sẵn phím bấm gọi menu Start siêu nhanh. Tối ưu tuyệt đối cho hệ sinh thái Windows, làm việc đa nhiệm cứ gọi là vù vù.",
          image: "../assets/img/mouse//chuot-microsoft-sculpt-ergonomic-3.png",
        },
      ],
    },
    brandInfo: {
      brand: "Microsoft",
      model: "Sculpt Ergonomic",
      color: "Đen",
      weight: "155g",
      ports: "USB Dongle 2.4GHz",
    },
  },
  {
    id: 58,
    name: "Chuột Bluetooth Microsoft Modern Mobile",
    category: "mouse",
    subCategory: "office",
    brand: "Microsoft",
    rating: 4.2,
    reviewCount: 89,
    price: 790000,
    oldPrice: 890000,
    discount: "-11%",
    quantity: 25,
    images: [
      "../assets/img/mouse//chuot-microsoft-modern-mobile-1.png",
      "../assets/img/mouse//chuot-microsoft-modern-mobile-2.png",
      "../assets/img/mouse//chuot-microsoft-modern-mobile-3.png",
      "../assets/img/mouse//chuot-microsoft-modern-mobile-4.png",
      "../assets/img/mouse//chuot-microsoft-modern-mobile-5.png",
    ],
    highlightSpecs: {
      cpu: "Windows, macOS, Android",
      gpu: "1000 DPI",
      ram: null,
      ssd: null,
      main: null,
      screen: null,
      battery: "Lên đến 12 tháng (Pin AAA)",
      connect: "Bluetooth 4.0/4.1/4.2",
      feature: "BlueTrack Technology lướt trên mọi mặt phẳng",
      layout: null,
      keycap: null,
      panel: null,
      size: "10.7 x 6.0 x 2.5 cm",
      hz: null,
    },
    description: {
      intro:
        "Microsoft Modern Mobile - Mỏng nhẹ tinh tế, vứt vào balo mang ra quán cafe là hết sẩy.",
      sections: [
        {
          title: "Đồng hành mọi nẻo đường",
          content:
            "Thiết kế mỏng dính như một chiếc smartphone, dễ dàng nhét vừa mọi ngăn túi. Kết nối Bluetooth trực tiếp không cần dongle cồng kềnh.",
          image: "../assets/img/mouse//chuot-microsoft-modern-mobile-1.png",
        },
        {
          title: "BlueTrack - Bất chấp mọi địa hình",
          content:
            "Công nghệ cảm biến độc quyền từ Microsoft giúp chuột lướt mượt trên cả mặt kính, mặt gỗ nhám hay thậm chí là... đùi của bạn.",
          image: "../assets/img/mouse//chuot-microsoft-modern-mobile-2.png",
        },
        {
          title: "Tone màu chuẩn Minimalism",
          content:
            "Vẻ ngoài tối giản, thanh lịch, cực match với Macbook hay các dòng Ultrabook mỏng nhẹ. Cầm con chuột là thấy toát lên vẻ tri thức!",
          image: "../assets/img/mouse//chuot-microsoft-modern-mobile-3.png",
        },
      ],
    },
    brandInfo: {
      brand: "Microsoft",
      model: "Modern Mobile",
      color: "Đen / Bạc / Xanh",
      weight: "78g",
      ports: "Bluetooth",
    },
  },
  {
    id: 59,
    name: "Chuột Gaming không dây DareU EM901X RGB",
    category: "mouse",
    subCategory: "gaming",
    brand: "DareU",
    rating: 4.6,
    reviewCount: 200,
    price: 590000,
    oldPrice: 690000,
    discount: "-14%",
    quantity: 50,
    images: [
      "../assets/img/mouse//chuot-gaming-dareu-em901x-1.png",
      "../assets/img/mouse//chuot-gaming-dareu-em901x-2.png",
      "../assets/img/mouse//chuot-gaming-dareu-em901x-3.png",
      "../assets/img/mouse//chuot-gaming-dareu-em901x-4.png",
      "../assets/img/mouse//chuot-gaming-dareu-em901x-5.png",
    ],
    highlightSpecs: {
      cpu: "Windows",
      gpu: "6000 DPI",
      ram: "LED RGB viền",
      ssd: null,
      main: null,
      screen: null,
      battery: "Tích hợp pin sạc 930mAh (Dock sạc kèm theo)",
      connect: "Wireless 2.4GHz, Wired USB-C",
      feature: "Kèm Dock sạc RGB xịn xò",
      layout: null,
      keycap: null,
      panel: null,
      size: "12.5 x 6.7 x 4.0 cm",
      hz: null,
    },
    description: {
      intro:
        "DareU EM901X RGB - Chuột không dây giá học sinh, chất lượng phụ huynh, lại còn kèm cả dock sạc vô lý thật sự!",
      sections: [
        {
          title: "Dock sạc led RGB sang chảnh",
          content:
            "Cầm 600 cành mua chuột không dây mà được tặng kèm dock sạc nam châm có LED RGB hắt sáng. Góc setup nhìn uy tín hẳn ra!",
          image: "../assets/img/mouse//chuot-gaming-dareu-em901x-1.png",
        },
        {
          title: "Dải LED viền uốn lượn mướt mắt",
          content:
            "Thiết kế dải LED RGB chạy dọc viền đáy chuột siêu nịnh mắt. Đóng cửa tắt đèn quẩy game đêm thì em nó là tâm điểm luôn.",
          image: "../assets/img/mouse//chuot-gaming-dareu-em901x-2.png",
        },
        {
          title: "Form cầm nịnh tay, click nảy",
          content:
            "Đường nét cắt xẻ nam tính, ôm sát lòng bàn tay. Nút bấm sử dụng switch độc quyền của DareU cho cảm giác click giòn tan.",
          image: "../assets/img/mouse//chuot-gaming-dareu-em901x-3.png",
        },
      ],
    },
    brandInfo: {
      brand: "DareU",
      model: "EM901X",
      color: "Hồng / Đen",
      weight: "85g",
      ports: "Wireless 2.4GHz",
    },
  },
  {
    id: 60,
    name: "Chuột Gaming DareU A960s Ultralight",
    category: "mouse",
    subCategory: "gaming",
    brand: "DareU",
    rating: 4.7,
    reviewCount: 150,
    price: 390000,
    oldPrice: 490000,
    discount: "-20%",
    quantity: 30,
    images: [
      "../assets/img/mouse//chuot-gaming-dareu-a960s-1.png",
      "../assets/img/mouse//chuot-gaming-dareu-a960s-2.png",
      "../assets/img/mouse//chuot-gaming-dareu-a960s-3.png",
      "../assets/img/mouse//chuot-gaming-dareu-a960s-4.png",
      "../assets/img/mouse//chuot-gaming-dareu-a960s-5.png",
    ],
    highlightSpecs: {
      cpu: "Windows",
      gpu: "8500 DPI",
      ram: "LED RGB",
      ssd: null,
      main: null,
      screen: null,
      battery: "Không (Chuột có dây)",
      connect: "Wired USB",
      feature: "Thiết kế siêu nhẹ vỏ lỗ tổ ong",
      layout: null,
      keycap: null,
      panel: null,
      size: "12.1 x 6.4 x 3.9 cm",
      hz: null,
    },
    description: {
      intro:
        "DareU A960s Ultralight - Trọng lượng siêu nhẹ chỉ 65g, vẩy chuột không biết mỏi là gì.",
      sections: [
        {
          title: "Nhẹ tựa lông hồng",
          content:
            "Với vỏ thiết kế đục lỗ tổ ong, em nó ép cân thành công xuống chỉ còn 65g. Những pha vẩy súng CS:GO cứ gọi là lả lướt.",
          image: "../assets/img/mouse//chuot-gaming-dareu-a960s-1.png",
        },
        {
          title: "Mát mẻ, nói không với mồ hôi tay",
          content:
            "Các lỗ tổ ong không chỉ để làm nhẹ mà còn giúp luân chuyển không khí, tay lúc nào cũng khô ráo dù có combat căng cực đến đâu.",
          image: "../assets/img/mouse//chuot-gaming-dareu-a960s-2.png",
        },
        {
          title: "Dây cáp bọc dù xịn xò",
          content:
            "Chuột có dây nhưng xài như không dây nhờ sợi cáp bọc dù siêu mềm, không hề có hiện tượng bị kéo ngược hay vướng víu trên mặt bàn.",
          image: "../assets/img/mouse//chuot-gaming-dareu-a960s-3.png",
        },
      ],
    },
    brandInfo: {
      brand: "DareU",
      model: "A960s",
      color: "Đen / Vàng",
      weight: "65g",
      ports: "USB",
    },
  },
];

// Trang gốc (index.html, GitHub Pages /Repo/): ../assets/ trỏ sai. Trong pages/: giữ ../assets/.
(function normalizeProductImagePaths() {
  if (typeof window === "undefined" || !window.location) return;
  const path = window.location.pathname.replace(/\\/g, "/");
  if (path.includes("/pages/")) return;

  const fix = (s) =>
    typeof s === "string" ? s.replace(/^\.\.\/(?=assets\/)/, "") : s;

  productsData.forEach((p) => {
    if (Array.isArray(p.images)) p.images = p.images.map(fix);
    if (p.description && Array.isArray(p.description.sections)) {
      p.description.sections.forEach((sec) => {
        if (sec.image) sec.image = fix(sec.image);
      });
    }
  });
})();

localStorage.setItem("products", JSON.stringify(productsData));
