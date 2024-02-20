const regions = [
  { region: '강원특별자치도 강릉시', lat: 37.7227768, lng: 128.8519236 },
  { region: '강원특별자치도 고성군', lat: 38.3773762, lng: 128.3997526 },
  { region: '강원특별자치도 동해시', lat: 37.506773, lng: 129.055604 },
  { region: '강원특별자치도 삼척시', lat: 37.2773968, lng: 129.1220028 },
  { region: '강원특별자치도 속초시', lat: 38.17601, lng: 128.5194615 },
  { region: '강원특별자치도 양구군', lat: 38.178176, lng: 128.001272 },
  { region: '강원특별자치도 양양군', lat: 38.0045219, lng: 128.5950959 },
  { region: '강원특별자치도 영월군', lat: 37.2039413, lng: 128.500649 },
  { region: '강원특별자치도 원주시', lat: 37.3082307, lng: 127.9294889 },
  { region: '강원특별자치도 인제군', lat: 38.0688048, lng: 128.263324 },
  { region: '강원특별자치도 정선군', lat: 37.3786668, lng: 128.7390494 },
  { region: '강원특별자치도 철원군', lat: 38.2434576, lng: 127.4141162 },
  { region: '강원특별자치도 춘천시', lat: 37.8897796, lng: 127.7398952 },
  { region: '강원특별자치도 태백시', lat: 37.1722939, lng: 128.9800161 },
  { region: '강원특별자치도 평창군', lat: 37.556735, lng: 128.4826261 },
  { region: '강원특별자치도 홍천군', lat: 37.7450683, lng: 128.0742344 },
  { region: '강원특별자치도 화천군', lat: 38.1383179, lng: 127.6849292 },
  { region: '강원특별자치도 횡성군', lat: 37.5089632, lng: 128.0770982 },
  { region: '경기도 가평군', lat: 37.8184719, lng: 127.4502156 },
  { region: '경기도 고양시', lat: 37.6650719, lng: 126.8369961 },
  { region: '경기도 과천시', lat: 37.4338294, lng: 127.0027656 },
  { region: '경기도 광명시', lat: 37.4451612, lng: 126.8646989 },
  { region: '경기도 광주시', lat: 37.4030854, lng: 127.3011624 },
  { region: '경기도 구리시', lat: 37.5990186, lng: 127.1313079 },
  { region: '경기도 군포시', lat: 37.3434691, lng: 126.9211003 },
  { region: '경기도 김포시', lat: 37.6818227, lng: 126.6265338 },
  { region: '경기도 남양주시', lat: 37.6625097, lng: 127.2436632 },
  { region: '경기도 동두천시', lat: 37.916543, lng: 127.0779171 },
  { region: '경기도 부천시', lat: 37.5042687, lng: 126.7886531 },
  { region: '경기도 성남시', lat: 37.4073695, lng: 127.1162181 },
  { region: '경기도 수원시', lat: 37.2803896, lng: 127.0077847 },
  { region: '경기도 시흥시', lat: 37.3864796, lng: 126.7841675 },
  { region: '경기도 안산시', lat: 37.2300833, lng: 126.6242525 },
  { region: '경기도 안성시', lat: 37.035033, lng: 127.3027301 },
  { region: '경기도 안양시', lat: 37.4027313, lng: 126.9279179 },
  { region: '경기도 양주시', lat: 37.8086632, lng: 127.001143 },
  { region: '경기도 양평군', lat: 37.5180465, lng: 127.5792445 },
  { region: '경기도 여주시', lat: 37.3024585, lng: 127.6157502 },
  { region: '경기도 연천군', lat: 38.0964416, lng: 127.0275846 },
  { region: '경기도 오산시', lat: 37.1632991, lng: 127.0513324 },
  { region: '경기도 용인시', lat: 37.2214872, lng: 127.2218612 },
  { region: '경기도 의왕시', lat: 37.3624626, lng: 126.9896996 },
  { region: '경기도 의정부시', lat: 37.7361884, lng: 127.0684356 },
  { region: '경기도 이천시', lat: 37.2097769, lng: 127.4810494 },
  { region: '경기도 파주시', lat: 37.8544244, lng: 126.8115232 },
  { region: '경기도 평택시', lat: 37.0159677, lng: 126.9941853 },
  { region: '경기도 포천시', lat: 37.9697852, lng: 127.2502925 },
  { region: '경기도 하남시', lat: 37.5228824, lng: 127.2059921 },
  { region: '경기도 화성시', lat: 37.1616306, lng: 126.8654604 },
  { region: '경상남도 거제시', lat: 34.8806427, lng: 128.6210824 },
  { region: '경상남도 거창군', lat: 35.7325671, lng: 127.9042308 },
  { region: '경상남도 고성군', lat: 35.0165117, lng: 128.2907283 },
  { region: '경상남도 김해시', lat: 35.2721355, lng: 128.8452281 },
  { region: '경상남도 남해군', lat: 34.8376721, lng: 127.8924234 },
  { region: '경상남도 밀양시', lat: 35.4984942, lng: 128.7895971 },
  { region: '경상남도 사천시', lat: 35.0481566, lng: 128.1102419 },
  { region: '경상남도 산청군', lat: 35.368606, lng: 127.8843338 },
  { region: '경상남도 양산시', lat: 35.4018747, lng: 129.0410269 },
  { region: '경상남도 의령군', lat: 35.3924481, lng: 128.2770734 },
  { region: '경상남도 진주시', lat: 35.205153, lng: 128.1297905 },
  { region: '경상남도 창녕군', lat: 35.5083094, lng: 128.4931971 },
  { region: '경상남도 창원시', lat: 35.2028593, lng: 128.6000923 },
  { region: '경상남도 통영시', lat: 34.8544227, lng: 128.433182 },
  { region: '경상남도 하동군', lat: 35.1381776, lng: 127.779014 },
  { region: '경상남도 함안군', lat: 35.2909696, lng: 128.4308338 },
  { region: '경상남도 함양군', lat: 35.5516407, lng: 127.7220624 },
  { region: '경상남도 합천군', lat: 35.576844, lng: 128.1421921 },
  { region: '경상북도 경산시', lat: 35.8337972, lng: 128.8090748 },
  { region: '경상북도 경주시', lat: 35.8266161, lng: 129.235988 },
  { region: '경상북도 고령군', lat: 35.7370027, lng: 128.3055253 },
  { region: '경상북도 구미시', lat: 36.207309, lng: 128.3555532 },
  { region: '경상북도 김천시', lat: 36.0603835, lng: 128.0777247 },
  { region: '경상북도 문경시', lat: 36.6910006, lng: 128.1488468 },
  { region: '경상북도 봉화군', lat: 36.9341307, lng: 128.9128821 },
  { region: '경상북도 상주시', lat: 36.4295654, lng: 128.0669313 },
  { region: '경상북도 성주군', lat: 35.9071362, lng: 128.2336152 },
  { region: '경상북도 안동시', lat: 36.5802373, lng: 128.7800357 },
  { region: '경상북도 영덕군', lat: 36.4823919, lng: 129.3173955 },
  { region: '경상북도 영양군', lat: 36.6964131, lng: 129.1450322 },
  { region: '경상북도 영주시', lat: 36.8705017, lng: 128.5976721 },
  { region: '경상북도 영천시', lat: 36.0156997, lng: 128.9427024 },
  { region: '경상북도 예천군', lat: 36.6540137, lng: 128.4224359 },
  { region: '경상북도 울릉군', lat: 37.4844171, lng: 130.9058002 },
  { region: '경상북도 울진군', lat: 36.9038993, lng: 129.3124073 },
  { region: '경상북도 의성군', lat: 36.3620052, lng: 128.6151413 },
  { region: '경상북도 청도군', lat: 35.6739247, lng: 128.7832658 },
  { region: '경상북도 청송군', lat: 36.3569355, lng: 129.0574298 },
  { region: '경상북도 칠곡군', lat: 36.0153963, lng: 128.4629995 },
  { region: '경상북도 포항시', lat: 36.0929227, lng: 129.3052666 },
  { region: '광주광역시 광산구', lat: 35.1557358, lng: 126.8354271 },
  { region: '광주광역시 남구', lat: 35.1557358, lng: 126.8354271 },
  { region: '광주광역시 동구', lat: 35.1557358, lng: 126.8354271 },
  { region: '광주광역시 북구', lat: 35.1557358, lng: 126.8354271 },
  { region: '광주광역시 서구', lat: 35.1557358, lng: 126.8354271 },
  { region: '대구광역시 군위군', lat: 35.8294374, lng: 128.5655119 },
  { region: '대구광역시 남구', lat: 35.8294374, lng: 128.5655119 },
  { region: '대구광역시 달서구', lat: 35.8294374, lng: 128.5655119 },
  { region: '대구광역시 달성군', lat: 35.8294374, lng: 128.5655119 },
  { region: '대구광역시 동구', lat: 35.8294374, lng: 128.5655119 },
  { region: '대구광역시 북구', lat: 35.8294374, lng: 128.5655119 },
  { region: '대구광역시 서구', lat: 35.8294374, lng: 128.5655119 },
  { region: '대구광역시 수성구', lat: 35.8294374, lng: 128.5655119 },
  { region: '대구광역시 중구', lat: 35.8294374, lng: 128.5655119 },
  { region: '대전광역시 대덕구', lat: 36.3398175, lng: 127.3940486 },
  { region: '대전광역시 동구', lat: 36.3398175, lng: 127.3940486 },
  { region: '대전광역시 서구', lat: 36.3398175, lng: 127.3940486 },
  { region: '대전광역시 유성구', lat: 36.3398175, lng: 127.3940486 },
  { region: '대전광역시 중구', lat: 36.3398175, lng: 127.3940486 },
  { region: '부산광역시 강서구', lat: 35.2100142, lng: 129.0688702 },
  { region: '부산광역시 금정구', lat: 35.2100142, lng: 129.0688702 },
  { region: '부산광역시 기장군', lat: 35.2100142, lng: 129.0688702 },
  { region: '부산광역시 남구', lat: 35.2100142, lng: 129.0688702 },
  { region: '부산광역시 동구', lat: 35.2100142, lng: 129.0688702 },
  { region: '부산광역시 동래구', lat: 35.2100142, lng: 129.0688702 },
  { region: '부산광역시 부산진구', lat: 35.2100142, lng: 129.0688702 },
  { region: '부산광역시 북구', lat: 35.2100142, lng: 129.0688702 },
  { region: '부산광역시 사상구', lat: 35.2100142, lng: 129.0688702 },
  { region: '부산광역시 사하구', lat: 35.2100142, lng: 129.0688702 },
  { region: '부산광역시 서구', lat: 35.2100142, lng: 129.0688702 },
  { region: '부산광역시 수영구', lat: 35.2100142, lng: 129.0688702 },
  { region: '부산광역시 연제구', lat: 35.2100142, lng: 129.0688702 },
  { region: '부산광역시 영도구', lat: 35.2100142, lng: 129.0688702 },
  { region: '부산광역시 중구', lat: 35.2100142, lng: 129.0688702 },
  { region: '부산광역시 해운대구', lat: 35.2100142, lng: 129.0688702 },
  { region: '서울특별시 강남구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 강동구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 강북구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 강서구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 관악구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 광진구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 구로구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 금천구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 노원구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 도봉구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 동대문구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 동작구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 마포구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 서대문구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 서초구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 성동구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 성북구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 송파구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 양천구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 영등포구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 용산구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 은평구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 종로구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 중구', lat: 37.5518911, lng: 126.9917937 },
  { region: '서울특별시 중랑구', lat: 37.5518911, lng: 126.9917937 },
  { region: '울산광역시 남구', lat: 35.5537228, lng: 129.2380554 },
  { region: '울산광역시 동구', lat: 35.5537228, lng: 129.2380554 },
  { region: '울산광역시 북구', lat: 35.5537228, lng: 129.2380554 },
  { region: '울산광역시 울주군', lat: 35.5537228, lng: 129.2380554 },
  { region: '울산광역시 중구', lat: 35.5537228, lng: 129.2380554 },
  { region: '인천광역시 강화군', lat: 37.4562557, lng: 126.7052062 },
  { region: '인천광역시 계양구', lat: 37.4562557, lng: 126.7052062 },
  { region: '인천광역시 남동구', lat: 37.4562557, lng: 126.7052062 },
  { region: '인천광역시 동구', lat: 37.4562557, lng: 126.7052062 },
  { region: '인천광역시 미추홀구', lat: 37.4562557, lng: 126.7052062 },
  { region: '인천광역시 부평구', lat: 37.4562557, lng: 126.7052062 },
  { region: '인천광역시 서구', lat: 37.4562557, lng: 126.7052062 },
  { region: '인천광역시 연수구', lat: 37.4562557, lng: 126.7052062 },
  { region: '인천광역시 옹진군', lat: 37.4562557, lng: 126.7052062 },
  { region: '인천광역시 중구', lat: 37.4562557, lng: 126.7052062 },
  { region: '전라남도 강진군', lat: 34.6205005, lng: 126.7721492 },
  { region: '전라남도 고흥군', lat: 34.6112219, lng: 127.284978 },
  { region: '전라남도 곡성군', lat: 35.2166181, lng: 127.2635881 },
  { region: '전라남도 광양시', lat: 35.0286487, lng: 127.6494094 },
  { region: '전라남도 구례군', lat: 35.2369475, lng: 127.5030874 },
  { region: '전라남도 나주시', lat: 34.9883585, lng: 126.7201733 },
  { region: '전라남도 담양군', lat: 35.291486, lng: 126.9952909 },
  { region: '전라남도 목포시', lat: 34.8118351, lng: 126.3921664 },
  { region: '전라남도 무안군', lat: 34.9904542, lng: 126.4816856 },
  { region: '전라남도 보성군', lat: 34.8144789, lng: 127.1607138 },
  { region: '전라남도 순천시', lat: 34.9946567, lng: 127.3894958 },
  { region: '전라남도 신안군', lat: 34.827332, lng: 126.101074 },
  { region: '전라남도 여수시', lat: 34.7603737, lng: 127.6622221 },
  { region: '전라남도 영광군', lat: 35.2771719, lng: 126.5119874 },
  { region: '전라남도 영암군', lat: 34.7957261, lng: 126.6235896 },
  { region: '전라남도 완도군', lat: 34.3110596, lng: 126.7550541 },
  { region: '전라남도 장성군', lat: 35.3296385, lng: 126.7685447 },
  { region: '전라남도 장흥군', lat: 34.6816856, lng: 126.9069278 },
  { region: '전라남도 진도군', lat: 34.4868712, lng: 126.2634853 },
  { region: '전라남도 함평군', lat: 35.1126823, lng: 126.5355523 },
  { region: '전라남도 해남군', lat: 34.5732516, lng: 126.5989274 },
  { region: '전라남도 화순군', lat: 35.0081798, lng: 127.0334394 },
  { region: '전라북도 고창군', lat: 35.4358216, lng: 126.7020806 },
  { region: '전라북도 군산시', lat: 35.9676772, lng: 126.7366293 },
  { region: '전라북도 김제시', lat: 35.8068736, lng: 126.8961044 },
  { region: '전라북도 남원시', lat: 35.4225506, lng: 127.4418975 },
  { region: '전라북도 무주군', lat: 35.9393652, lng: 127.7129454 },
  { region: '전라북도 부안군', lat: 35.7315661, lng: 126.7334651 },
  { region: '전라북도 순창군', lat: 35.4336326, lng: 127.0899527 },
  { region: '전라북도 완주군', lat: 35.9226113, lng: 127.2229862 },
  { region: '전라북도 익산시', lat: 36.0230799, lng: 126.9894962 },
  { region: '전라북도 임실군', lat: 35.5981956, lng: 127.2366461 },
  { region: '전라북도 장수군', lat: 35.6574424, lng: 127.5441988 },
  { region: '전라북도 전주시', lat: 35.8280463, lng: 127.1160156 },
  { region: '전라북도 정읍시', lat: 35.6026273, lng: 126.9058607 },
  { region: '전라북도 진안군', lat: 35.8287825, lng: 127.4300174 },
  { region: '충청남도 계룡시', lat: 36.2915841, lng: 127.2344325 },
  { region: '충청남도 공주시', lat: 36.47982, lng: 127.0752196 },
  { region: '충청남도 금산군', lat: 36.1190235, lng: 127.4782791 },
  { region: '충청남도 논산시', lat: 36.1908784, lng: 127.1577341 },
  { region: '충청남도 당진시', lat: 36.9023743, lng: 126.6545022 },
  { region: '충청남도 보령시', lat: 36.3331629, lng: 126.6129441 },
  { region: '충청남도 부여군', lat: 36.2463459, lng: 126.856897 },
  { region: '충청남도 서산시', lat: 36.7844993, lng: 126.4503169 },
  { region: '충청남도 서천군', lat: 36.0803312, lng: 126.6913277 },
  { region: '충청남도 아산시', lat: 36.8073191, lng: 126.980066 },
  { region: '충청남도 예산군', lat: 36.6706373, lng: 126.7843178 },
  { region: '충청남도 천안시', lat: 36.804138, lng: 127.2025586 },
  { region: '충청남도 청양군', lat: 36.4307266, lng: 126.8529299 },
  { region: '충청남도 태안군', lat: 36.7456421, lng: 126.2980528 },
  { region: '충청남도 홍성군', lat: 36.5697577, lng: 126.6253106 },
  { region: '충청북도 괴산군', lat: 36.7697608, lng: 127.8294253 },
  { region: '충청북도 단양군', lat: 36.9941896, lng: 128.3877555 },
  { region: '충청북도 보은군', lat: 36.4899504, lng: 127.729342 },
  { region: '충청북도 영동군', lat: 36.1597002, lng: 127.8142287 },
  { region: '충청북도 옥천군', lat: 36.3203938, lng: 127.6566592 },
  { region: '충청북도 음성군', lat: 36.9761637, lng: 127.6142294 },
  { region: '충청북도 제천시', lat: 37.0597328, lng: 128.141005 },
  { region: '충청북도 증평군', lat: 36.7864783, lng: 127.6046068 },
  { region: '충청북도 진천군', lat: 36.8708978, lng: 127.4405915 },
  { region: '충청북도 청주시', lat: 36.6272962, lng: 127.498731 },
  { region: '충청북도 충주시', lat: 37.0151461, lng: 127.8956693 },
  { region: '제주도 제주시', lat: 33.3846216, lng: 126.5534925 },
  { region: '제주도 서귀포시', lat: 33.3846216, lng: 126.5534925 },
];

export default regions;
