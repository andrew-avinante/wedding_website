vm = new Vue({
    el: '#app',
    data: {
        hotels: [{
                hotelName: 'Hyatt Regency Greenville',
                phoneNumber: '864-235-1234',
                address: {
                    addressLine1: '220 N Main Street',
                    city: 'Greenville',
                    state: 'SC',
                    zip: '29601'
                },
                distances: [{
                        locationName: 'Reception',
                        distance: '1 min'
                    },
                    {
                        locationName: 'Ceremony',
                        distance: '47 min'
                    }
                ],
                mapLink: 'https://goo.gl/maps/TD7DpbZpanqaa91P7',
                bookingLink: 'https://www.hyatt.com/en-US/hotel/south-carolina/hyatt-regency-greenville/gsprg?src=corp_lclb_gmb_seo_nam_gsprg',
                imgSrc: '/img/hotel/hotel1.webp'
            },
            {
                hotelName: 'SpringHill Suites by Marriott Greenville Downtown',
                phoneNumber: '864-720-2901',
                address: {
                    addressLine1: '200 E Washington Street',
                    addressLine2: 'Suite B',
                    city: 'Greenville',
                    state: 'SC',
                    zip: '29601'
                },
                distances: [{
                        locationName: 'Reception',
                        distance: '2 min'
                    },
                    {
                        locationName: 'Ceremony',
                        distance: '49 min'
                    }
                ],
                mapLink: 'https://goo.gl/maps/gtTXFYERFPpvHBkEA',
                bookingLink: 'https://www.marriott.com/hotels/travel/gspgs-springhill-suites-greenville-downtown/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2&aff=MARWW&affname=305950&co=WW&nt=PH',
                imgSrc: '/img/hotel/hotel2.jfif'
            },
            {
                hotelName: 'Courtyard by Marriott Greenville Downtown',
                phoneNumber: '864-451-5700',
                address: {
                    addressLine1: '50 W Broad Street',
                    city: 'Greenville',
                    state: 'SC',
                    zip: '29601'
                },
                distances: [{
                        locationName: 'Reception',
                        distance: '4 min'
                    },
                    {
                        locationName: 'Ceremony',
                        distance: '47 min'
                    }
                ],
                mapLink: 'https://g.page/CourtyardGreenvilleDowntown?share',
                bookingLink: 'https://www.marriott.com/hotels/travel/gspgd-courtyard-greenville-downtown/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2&y_source=1_MjgxODc5NC03MTUtbG9jYXRpb24uZ29vZ2xlX3dlYnNpdGVfb3ZlcnJpZGU=&aff=MARWW&affname=305950&co=WW&nt=PH',
                imgSrc: '/img/hotel/hotel3.jfif'
            },
            {
                hotelName: 'Holiday Inn Express & Suites Greenville-Downtown',
                phoneNumber: '864-678-8000',
                address: {
                    addressLine1: '407 N Main Street',
                    city: 'Greenville',
                    state: 'SC',
                    zip: '29601'
                },
                distances: [{
                        locationName: 'Reception',
                        distance: '3 min'
                    },
                    {
                        locationName: 'Ceremony',
                        distance: '44 min'
                    }
                ],
                mapLink: 'https://goo.gl/maps/WKR9HankVv3xEzqq7',
                bookingLink: 'https://www.ihg.com/holidayinnexpress/hotels/us/en/greenville/gspdt/hoteldetail?cm_mmc=CJ-_-5370367-_-100047223-_-Hotel+Indigo+Brand+Homepage-_-23c550a7337611eb80ec0bff0a240613&_PMID=99634986&glat=AFFI&setPMCookies=true&cjevent=23c550a7337611eb80ec0bff0a240613',
                imgSrc: '/img/hotel/hotel4.webp'
            },
            {
                hotelName: 'Home2 Suites by Hilton Greenville Downtown',
                phoneNumber: '864-626-3700',
                address: {
                    addressLine1: '350 N Main Street',
                    city: 'Greenville',
                    state: 'SC',
                    zip: '29601'
                },
                distances: [{
                        locationName: 'Reception',
                        distance: '2 min'
                    },
                    {
                        locationName: 'Ceremony',
                        distance: '46 min'
                    }
                ],
                mapLink: 'https://goo.gl/maps/9uHTPMb6QSkgANKy9',
                bookingLink: 'https://www.hilton.com/en/hotels/gspdoht-home2-suites-greenville-downtown/?SEO_id=GMB-HT-GSPDOHT',
                imgSrc: '/img/hotel/hotel5.webp'
            },
            {
                hotelName: 'Hilton Greenville',
                phoneNumber: '864-232-4747',
                address: {
                    addressLine1: '45 W Orchard Park Drive',
                    city: 'Greenville',
                    state: 'SC',
                    zip: '29615'
                },
                distances: [{
                        locationName: 'Reception',
                        distance: '7 min'
                    },
                    {
                        locationName: 'Ceremony',
                        distance: '46 min'
                    }
                ],
                mapLink: 'https://g.page/HiltonGreenville?share',
                bookingLink: 'https://www.hilton.com/en/hotels/gspschf-hilton-greenville/?SEO_id=GMB-HI-GSPSCHF',
                imgSrc: '/img/hotel/hotel6.webp'
            }
        ]
    }
});