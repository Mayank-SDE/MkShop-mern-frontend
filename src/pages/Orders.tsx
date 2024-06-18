import { ReactElement, useEffect, useState } from "react";

type OrderTableInterface = {
    orderId: number | any;
    quantity: number;
    discount: number;
    amount: number;
    status: ReactElement;
    action: ReactElement;
    purchase_date: string;
    last_updated: string;
}

export const myOrderTableData = [
    {
        orderId: 1,
        Quantity: 16,
        Discount: 35,
        Amount: 6885,
        Status: 'Delivered',
        Action: 'View',
        Date: '01/11/2023',
    },
    {
        orderId: 2,
        Quantity: 25,
        Discount: 96,
        Amount: 1685,
        Status: 'Processing',
        Action: 'View',
        Date: '28/06/2023',
    },
    {
        orderId: 3,
        Quantity: 29,
        Discount: 25,
        Amount: 2216,
        Status: 'Delivered',
        Action: 'View',
        Date: '14/11/2023',
    },
    {
        orderId: 4,
        Quantity: 2,
        Discount: 9,
        Amount: 6964,
        Status: 'Processing',
        Action: 'View',
        Date: '19/05/2023',
    },
    {
        orderId: 5,
        Quantity: 39,
        Discount: 92,
        Amount: 5140,
        Status: 'Shipped',
        Action: 'View',
        Date: '28/01/2024',
    },
    {
        orderId: 6,
        Quantity: 26,
        Discount: 8,
        Amount: 1157,
        Status: 'Processing',
        Action: 'View',
        Date: '27/08/2023',
    },
    {
        orderId: 7,
        Quantity: 12,
        Discount: 76,
        Amount: 1691,
        Status: 'Shipped',
        Action: 'View',
        Date: '25/04/2024',
    },
    {
        orderId: 8,
        Quantity: 27,
        Discount: 7,
        Amount: 1339,
        Status: 'Processing',
        Action: 'View',
        Date: '23/10/2023',
    },
    {
        orderId: 9,
        Quantity: 47,
        Discount: 76,
        Amount: 735,
        Status: 'Shipped',
        Action: 'View',
        Date: '11/08/2023',
    },
    {
        orderId: 10,
        Quantity: 3,
        Discount: 23,
        Amount: 7194,
        Status: 'Shipped',
        Action: 'View',
        Date: '20/05/2023',
    },
    {
        orderId: 11,
        Quantity: 38,
        Discount: 77,
        Amount: 5897,
        Status: 'Processing',
        Action: 'View',
        Date: '13/05/2023',
    },
    {
        orderId: 12,
        Quantity: 2,
        Discount: 92,
        Amount: 556,
        Status: 'Delivered',
        Action: 'View',
        Date: '05/11/2023',
    },
    {
        orderId: 13,
        Quantity: 2,
        Discount: 38,
        Amount: 22,
        Status: 'Shipped',
        Action: 'View',
        Date: '14/08/2023',
    },
    {
        orderId: 14,
        Quantity: 21,
        Discount: 81,
        Amount: 9695,
        Status: 'Delivered',
        Action: 'View',
        Date: '12/07/2023',
    },
    {
        orderId: 15,
        Quantity: 43,
        Discount: 56,
        Amount: 9336,
        Status: 'Processing',
        Action: 'View',
        Date: '12/12/2023',
    },
    {
        orderId: 16,
        Quantity: 26,
        Discount: 7,
        Amount: 9237,
        Status: 'Delivered',
        Action: 'View',
        Date: '17/06/2023',
    },
    {
        orderId: 17,
        Quantity: 43,
        Discount: 72,
        Amount: 5959,
        Status: 'Shipped',
        Action: 'View',
        Date: '08/04/2024',
    },
    {
        orderId: 18,
        Quantity: 14,
        Discount: 9,
        Amount: 3139,
        Status: 'Processing',
        Action: 'View',
        Date: '28/11/2023',
    },
    {
        orderId: 19,
        Quantity: 20,
        Discount: 18,
        Amount: 8559,
        Status: 'Processing',
        Action: 'View',
        Date: '01/09/2023',
    },
    {
        orderId: 20,
        Quantity: 1,
        Discount: 81,
        Amount: 7640,
        Status: 'Shipped',
        Action: 'View',
        Date: '30/08/2023',
    },
    {
        orderId: 21,
        Quantity: 21,
        Discount: 93,
        Amount: 1165,
        Status: 'Shipped',
        Action: 'View',
        Date: '04/09/2023',
    },
    {
        orderId: 22,
        Quantity: 27,
        Discount: 51,
        Amount: 3064,
        Status: 'Processing',
        Action: 'View',
        Date: '05/12/2023',
    },
    {
        orderId: 23,
        Quantity: 19,
        Discount: 19,
        Amount: 5259,
        Status: 'Delivered',
        Action: 'View',
        Date: '19/02/2024',
    },
    {
        orderId: 24,
        Quantity: 10,
        Discount: 66,
        Amount: 7593,
        Status: 'Processing',
        Action: 'View',
        Date: '25/10/2023',
    },
    {
        orderId: 25,
        Quantity: 12,
        Discount: 70,
        Amount: 1041,
        Status: 'Delivered',
        Action: 'View',
        Date: '30/04/2024',
    },
    {
        orderId: 26,
        Quantity: 41,
        Discount: 93,
        Amount: 1503,
        Status: 'Delivered',
        Action: 'View',
        Date: '08/04/2024',
    },
    {
        orderId: 27,
        Quantity: 39,
        Discount: 38,
        Amount: 6322,
        Status: 'Processing',
        Action: 'View',
        Date: '12/03/2024',
    },
    {
        orderId: 28,
        Quantity: 35,
        Discount: 35,
        Amount: 7150,
        Status: 'Shipped',
        Action: 'View',
        Date: '26/03/2024',
    },
    {
        orderId: 29,
        Quantity: 2,
        Discount: 100,
        Amount: 5188,
        Status: 'Delivered',
        Action: 'View',
        Date: '26/02/2024',
    },
    {
        orderId: 30,
        Quantity: 27,
        Discount: 63,
        Amount: 2423,
        Status: 'Delivered',
        Action: 'View',
        Date: '12/09/2023',
    },
    {
        orderId: 31,
        Quantity: 40,
        Discount: 91,
        Amount: 9790,
        Status: 'Delivered',
        Action: 'View',
        Date: '14/03/2024',
    },
    {
        orderId: 32,
        Quantity: 28,
        Discount: 96,
        Amount: 4910,
        Status: 'Delivered',
        Action: 'View',
        Date: '28/07/2023',
    },
    {
        orderId: 33,
        Quantity: 40,
        Discount: 41,
        Amount: 2986,
        Status: 'Shipped',
        Action: 'View',
        Date: '26/11/2023',
    },
    {
        orderId: 34,
        Quantity: 22,
        Discount: 26,
        Amount: 3075,
        Status: 'Delivered',
        Action: 'View',
        Date: '18/06/2023',
    },
    {
        orderId: 35,
        Quantity: 9,
        Discount: 72,
        Amount: 5312,
        Status: 'Shipped',
        Action: 'View',
        Date: '13/02/2024',
    },
    {
        orderId: 36,
        Quantity: 8,
        Discount: 34,
        Amount: 4860,
        Status: 'Processing',
        Action: 'View',
        Date: '22/11/2023',
    },
    {
        orderId: 37,
        Quantity: 45,
        Discount: 22,
        Amount: 1218,
        Status: 'Shipped',
        Action: 'View',
        Date: '28/01/2024',
    },
    {
        orderId: 38,
        Quantity: 30,
        Discount: 92,
        Amount: 6072,
        Status: 'Processing',
        Action: 'View',
        Date: '04/06/2023',
    },
    {
        orderId: 39,
        Quantity: 41,
        Discount: 21,
        Amount: 5603,
        Status: 'Shipped',
        Action: 'View',
        Date: '02/08/2023',
    },
    {
        orderId: 40,
        Quantity: 31,
        Discount: 86,
        Amount: 2143,
        Status: 'Shipped',
        Action: 'View',
        Date: '20/05/2023',
    },
    {
        orderId: 41,
        Quantity: 42,
        Discount: 35,
        Amount: 6296,
        Status: 'Shipped',
        Action: 'View',
        Date: '10/01/2024',
    },
    {
        orderId: 42,
        Quantity: 15,
        Discount: 81,
        Amount: 8341,
        Status: 'Shipped',
        Action: 'View',
        Date: '30/10/2023',
    },
    {
        orderId: 43,
        Quantity: 44,
        Discount: 56,
        Amount: 7633,
        Status: 'Shipped',
        Action: 'View',
        Date: '22/02/2024',
    },
    {
        orderId: 44,
        Quantity: 31,
        Discount: 26,
        Amount: 6778,
        Status: 'Processing',
        Action: 'View',
        Date: '23/02/2024',
    },
    {
        orderId: 45,
        Quantity: 38,
        Discount: 38,
        Amount: 3215,
        Status: 'Delivered',
        Action: 'View',
        Date: '20/05/2023',
    },
    {
        orderId: 46,
        Quantity: 22,
        Discount: 74,
        Amount: 9087,
        Status: 'Processing',
        Action: 'View',
        Date: '07/04/2024',
    },
    {
        orderId: 47,
        Quantity: 29,
        Discount: 75,
        Amount: 2191,
        Status: 'Shipped',
        Action: 'View',
        Date: '11/11/2023',
    },
    {
        orderId: 48,
        Quantity: 48,
        Discount: 96,
        Amount: 6080,
        Status: 'Processing',
        Action: 'View',
        Date: '09/12/2023',
    },
    {
        orderId: 49,
        Quantity: 31,
        Discount: 28,
        Amount: 3875,
        Status: 'Shipped',
        Action: 'View',
        Date: '01/09/2023',
    },
    {
        orderId: 50,
        Quantity: 32,
        Discount: 58,
        Amount: 5043,
        Status: 'Shipped',
        Action: 'View',
        Date: '13/03/2024',
    },
    {
        orderId: 51,
        Quantity: 44,
        Discount: 30,
        Amount: 4249,
        Status: 'Delivered',
        Action: 'View',
        Date: '26/06/2023',
    },
    {
        orderId: 52,
        Quantity: 39,
        Discount: 65,
        Amount: 9892,
        Status: 'Processing',
        Action: 'View',
        Date: '29/08/2023',
    },
    {
        orderId: 53,
        Quantity: 16,
        Discount: 66,
        Amount: 502,
        Status: 'Shipped',
        Action: 'View',
        Date: '04/07/2023',
    },
    {
        orderId: 54,
        Quantity: 34,
        Discount: 13,
        Amount: 184,
        Status: 'Delivered',
        Action: 'View',
        Date: '23/08/2023',
    },
    {
        orderId: 55,
        Quantity: 26,
        Discount: 25,
        Amount: 1852,
        Status: 'Delivered',
        Action: 'View',
        Date: '01/03/2024',
    },
    {
        orderId: 56,
        Quantity: 14,
        Discount: 61,
        Amount: 1708,
        Status: 'Processing',
        Action: 'View',
        Date: '04/09/2023',
    },
    {
        orderId: 57,
        Quantity: 1,
        Discount: 93,
        Amount: 5823,
        Status: 'Delivered',
        Action: 'View',
        Date: '13/10/2023',
    },
    {
        orderId: 58,
        Quantity: 13,
        Discount: 55,
        Amount: 2050,
        Status: 'Shipped',
        Action: 'View',
        Date: '19/09/2023',
    },
    {
        orderId: 59,
        Quantity: 45,
        Discount: 87,
        Amount: 6632,
        Status: 'Processing',
        Action: 'View',
        Date: '09/09/2023',
    },
    {
        orderId: 60,
        Quantity: 24,
        Discount: 81,
        Amount: 5187,
        Status: 'Shipped',
        Action: 'View',
        Date: '13/08/2023',
    },
    {
        orderId: 61,
        Quantity: 6,
        Discount: 35,
        Amount: 2854,
        Status: 'Shipped',
        Action: 'View',
        Date: '16/01/2024',
    },
    {
        orderId: 62,
        Quantity: 1,
        Discount: 53,
        Amount: 5806,
        Status: 'Delivered',
        Action: 'View',
        Date: '21/02/2024',
    },
    {
        orderId: 63,
        Quantity: 35,
        Discount: 27,
        Amount: 1800,
        Status: 'Delivered',
        Action: 'View',
        Date: '04/12/2023',
    },
    {
        orderId: 64,
        Quantity: 35,
        Discount: 30,
        Amount: 9287,
        Status: 'Delivered',
        Action: 'View',
        Date: '22/05/2023',
    },
    {
        orderId: 65,
        Quantity: 17,
        Discount: 38,
        Amount: 2531,
        Status: 'Shipped',
        Action: 'View',
        Date: '27/08/2023',
    },
    {
        orderId: 66,
        Quantity: 4,
        Discount: 39,
        Amount: 5482,
        Status: 'Shipped',
        Action: 'View',
        Date: '18/10/2023',
    },
    {
        orderId: 67,
        Quantity: 23,
        Discount: 49,
        Amount: 3361,
        Status: 'Delivered',
        Action: 'View',
        Date: '25/04/2024',
    },
    {
        orderId: 68,
        Quantity: 45,
        Discount: 69,
        Amount: 9248,
        Status: 'Processing',
        Action: 'View',
        Date: '02/02/2024',
    },
    {
        orderId: 69,
        Quantity: 25,
        Discount: 9,
        Amount: 7193,
        Status: 'Delivered',
        Action: 'View',
        Date: '06/02/2024',
    },
    {
        orderId: 70,
        Quantity: 10,
        Discount: 15,
        Amount: 1626,
        Status: 'Processing',
        Action: 'View',
        Date: '23/06/2023',
    },
    {
        orderId: 71,
        Quantity: 48,
        Discount: 56,
        Amount: 7912,
        Status: 'Processing',
        Action: 'View',
        Date: '29/10/2023',
    },
    {
        orderId: 72,
        Quantity: 28,
        Discount: 48,
        Amount: 5879,
        Status: 'Processing',
        Action: 'View',
        Date: '28/04/2024',
    },
    {
        orderId: 73,
        Quantity: 2,
        Discount: 73,
        Amount: 15,
        Status: 'Shipped',
        Action: 'View',
        Date: '31/12/2023',
    },
    {
        orderId: 74,
        Quantity: 34,
        Discount: 68,
        Amount: 1950,
        Status: 'Processing',
        Action: 'View',
        Date: '10/03/2024',
    },
    {
        orderId: 75,
        Quantity: 3,
        Discount: 76,
        Amount: 5588,
        Status: 'Shipped',
        Action: 'View',
        Date: '06/05/2024',
    },
    {
        orderId: 76,
        Quantity: 34,
        Discount: 97,
        Amount: 2091,
        Status: 'Processing',
        Action: 'View',
        Date: '18/09/2023',
    },
    {
        orderId: 77,
        Quantity: 21,
        Discount: 11,
        Amount: 2955,
        Status: 'Delivered',
        Action: 'View',
        Date: '06/03/2024',
    },
    {
        orderId: 78,
        Quantity: 30,
        Discount: 74,
        Amount: 1090,
        Status: 'Delivered',
        Action: 'View',
        Date: '22/05/2023',
    },
    {
        orderId: 79,
        Quantity: 15,
        Discount: 92,
        Amount: 1062,
        Status: 'Shipped',
        Action: 'View',
        Date: '12/10/2023',
    },
    {
        orderId: 80,
        Quantity: 28,
        Discount: 53,
        Amount: 1925,
        Status: 'Delivered',
        Action: 'View',
        Date: '08/04/2024',
    },
    {
        orderId: 81,
        Quantity: 45,
        Discount: 58,
        Amount: 4057,
        Status: 'Processing',
        Action: 'View',
        Date: '06/06/2023',
    },
    {
        orderId: 82,
        Quantity: 45,
        Discount: 97,
        Amount: 4260,
        Status: 'Delivered',
        Action: 'View',
        Date: '19/08/2023',
    },
    {
        orderId: 83,
        Quantity: 37,
        Discount: 55,
        Amount: 6009,
        Status: 'Shipped',
        Action: 'View',
        Date: '05/06/2023',
    },
    {
        orderId: 84,
        Quantity: 25,
        Discount: 71,
        Amount: 6430,
        Status: 'Shipped',
        Action: 'View',
        Date: '07/08/2023',
    },
    {
        orderId: 85,
        Quantity: 12,
        Discount: 83,
        Amount: 401,
        Status: 'Processing',
        Action: 'View',
        Date: '06/08/2023',
    },
    {
        orderId: 86,
        Quantity: 45,
        Discount: 38,
        Amount: 4398,
        Status: 'Shipped',
        Action: 'View',
        Date: '22/06/2023',
    },
    {
        orderId: 87,
        Quantity: 26,
        Discount: 16,
        Amount: 4925,
        Status: 'Processing',
        Action: 'View',
        Date: '15/08/2023',
    },
    {
        orderId: 88,
        Quantity: 17,
        Discount: 74,
        Amount: 7657,
        Status: 'Delivered',
        Action: 'View',
        Date: '06/01/2024',
    },
    {
        orderId: 89,
        Quantity: 10,
        Discount: 4,
        Amount: 6506,
        Status: 'Processing',
        Action: 'View',
        Date: '11/01/2024',
    },
    {
        orderId: 90,
        Quantity: 22,
        Discount: 21,
        Amount: 8579,
        Status: 'Delivered',
        Action: 'View',
        Date: '28/03/2024',
    },
    {
        orderId: 91,
        Quantity: 40,
        Discount: 31,
        Amount: 937,
        Status: 'Shipped',
        Action: 'View',
        Date: '28/06/2023',
    },
    {
        orderId: 92,
        Quantity: 50,
        Discount: 68,
        Amount: 2923,
        Status: 'Processing',
        Action: 'View',
        Date: '06/05/2024',
    },
    {
        orderId: 93,
        Quantity: 19,
        Discount: 2,
        Amount: 1442,
        Status: 'Shipped',
        Action: 'View',
        Date: '10/01/2024',
    },
    {
        orderId: 94,
        Quantity: 4,
        Discount: 17,
        Amount: 6775,
        Status: 'Processing',
        Action: 'View',
        Date: '02/11/2023',
    },
    {
        orderId: 95,
        Quantity: 35,
        Discount: 48,
        Amount: 4438,
        Status: 'Processing',
        Action: 'View',
        Date: '18/01/2024',
    },
    {
        orderId: 96,
        Quantity: 44,
        Discount: 73,
        Amount: 8214,
        Status: 'Shipped',
        Action: 'View',
        Date: '23/03/2024',
    },
    {
        orderId: 97,
        Quantity: 29,
        Discount: 26,
        Amount: 9299,
        Status: 'Shipped',
        Action: 'View',
        Date: '12/11/2023',
    },
    {
        orderId: 98,
        Quantity: 9,
        Discount: 24,
        Amount: 7022,
        Status: 'Processing',
        Action: 'View',
        Date: '02/02/2024',
    },
    {
        orderId: 99,
        Quantity: 6,
        Discount: 5,
        Amount: 5772,
        Status: 'Processing',
        Action: 'View',
        Date: '17/01/2024',
    },
    {
        orderId: 100,
        Quantity: 41,
        Discount: 12,
        Amount: 6951,
        Status: 'Delivered',
        Action: 'View',
        Date: '20/12/2023',
    },
    {
        orderId: 101,
        Quantity: 32,
        Discount: 45,
        Amount: 4570,
        Status: 'Processing',
        Action: 'View',
        Date: '14/04/2024',
    },
    {
        orderId: 102,
        Quantity: 38,
        Discount: 59,
        Amount: 2867,
        Status: 'Shipped',
        Action: 'View',
        Date: '27/12/2023',
    },
    {
        orderId: 103,
        Quantity: 48,
        Discount: 40,
        Amount: 8730,
        Status: 'Processing',
        Action: 'View',
        Date: '26/09/2023',
    },
    {
        orderId: 104,
        Quantity: 44,
        Discount: 62,
        Amount: 3299,
        Status: 'Processing',
        Action: 'View',
        Date: '01/06/2023',
    },
    {
        orderId: 105,
        Quantity: 50,
        Discount: 38,
        Amount: 5094,
        Status: 'Delivered',
        Action: 'View',
        Date: '12/02/2024',
    },
    {
        orderId: 106,
        Quantity: 28,
        Discount: 62,
        Amount: 2301,
        Status: 'Delivered',
        Action: 'View',
        Date: '06/04/2024',
    },
    {
        orderId: 107,
        Quantity: 35,
        Discount: 39,
        Amount: 1815,
        Status: 'Delivered',
        Action: 'View',
        Date: '21/04/2024',
    },
    {
        orderId: 108,
        Quantity: 43,
        Discount: 84,
        Amount: 4579,
        Status: 'Shipped',
        Action: 'View',
        Date: '26/04/2024',
    },
    {
        orderId: 109,
        Quantity: 17,
        Discount: 77,
        Amount: 5102,
        Status: 'Delivered',
        Action: 'View',
        Date: '26/07/2023',
    },
    {
        orderId: 110,
        Quantity: 15,
        Discount: 49,
        Amount: 5838,
        Status: 'Delivered',
        Action: 'View',
        Date: '03/11/2023',
    },
    {
        orderId: 111,
        Quantity: 15,
        Discount: 33,
        Amount: 1026,
        Status: 'Shipped',
        Action: 'View',
        Date: '08/04/2024',
    },
    {
        orderId: 112,
        Quantity: 8,
        Discount: 34,
        Amount: 2670,
        Status: 'Delivered',
        Action: 'View',
        Date: '29/08/2023',
    },
    {
        orderId: 113,
        Quantity: 40,
        Discount: 61,
        Amount: 3253,
        Status: 'Processing',
        Action: 'View',
        Date: '08/09/2023',
    },
    {
        orderId: 114,
        Quantity: 18,
        Discount: 56,
        Amount: 9311,
        Status: 'Processing',
        Action: 'View',
        Date: '16/01/2024',
    },
    {
        orderId: 115,
        Quantity: 8,
        Discount: 41,
        Amount: 3175,
        Status: 'Shipped',
        Action: 'View',
        Date: '09/03/2024',
    },
    {
        orderId: 116,
        Quantity: 43,
        Discount: 24,
        Amount: 9602,
        Status: 'Delivered',
        Action: 'View',
        Date: '02/03/2024',
    },
    {
        orderId: 117,
        Quantity: 43,
        Discount: 75,
        Amount: 9765,
        Status: 'Processing',
        Action: 'View',
        Date: '30/04/2024',
    },
    {
        orderId: 118,
        Quantity: 46,
        Discount: 82,
        Amount: 1984,
        Status: 'Shipped',
        Action: 'View',
        Date: '22/03/2024',
    },
    {
        orderId: 119,
        Quantity: 27,
        Discount: 36,
        Amount: 4463,
        Status: 'Shipped',
        Action: 'View',
        Date: '25/12/2023',
    },
    {
        orderId: 120,
        Quantity: 20,
        Discount: 11,
        Amount: 2001,
        Status: 'Delivered',
        Action: 'View',
        Date: '16/07/2023',
    },
    {
        orderId: 121,
        Quantity: 49,
        Discount: 28,
        Amount: 2580,
        Status: 'Shipped',
        Action: 'View',
        Date: '26/07/2023',
    },
    {
        orderId: 122,
        Quantity: 50,
        Discount: 71,
        Amount: 2251,
        Status: 'Delivered',
        Action: 'View',
        Date: '07/12/2023',
    },
    {
        orderId: 123,
        Quantity: 35,
        Discount: 54,
        Amount: 1171,
        Status: 'Delivered',
        Action: 'View',
        Date: '21/01/2024',
    },
    {
        orderId: 124,
        Quantity: 13,
        Discount: 56,
        Amount: 8935,
        Status: 'Processing',
        Action: 'View',
        Date: '23/04/2024',
    },
    {
        orderId: 125,
        Quantity: 26,
        Discount: 76,
        Amount: 8505,
        Status: 'Delivered',
        Action: 'View',
        Date: '13/09/2023',
    },
    {
        orderId: 126,
        Quantity: 22,
        Discount: 72,
        Amount: 9274,
        Status: 'Delivered',
        Action: 'View',
        Date: '02/12/2023',
    },
    {
        orderId: 127,
        Quantity: 15,
        Discount: 46,
        Amount: 1853,
        Status: 'Processing',
        Action: 'View',
        Date: '04/03/2024',
    },
    {
        orderId: 128,
        Quantity: 48,
        Discount: 36,
        Amount: 8553,
        Status: 'Shipped',
        Action: 'View',
        Date: '17/05/2023',
    },
    {
        orderId: 129,
        Quantity: 50,
        Discount: 5,
        Amount: 341,
        Status: 'Shipped',
        Action: 'View',
        Date: '20/05/2023',
    },
    {
        orderId: 130,
        Quantity: 29,
        Discount: 12,
        Amount: 6005,
        Status: 'Shipped',
        Action: 'View',
        Date: '31/12/2023',
    },
    {
        orderId: 131,
        Quantity: 46,
        Discount: 37,
        Amount: 1555,
        Status: 'Delivered',
        Action: 'View',
        Date: '27/03/2024',
    },
    {
        orderId: 132,
        Quantity: 36,
        Discount: 11,
        Amount: 6344,
        Status: 'Shipped',
        Action: 'View',
        Date: '10/09/2023',
    },
    {
        orderId: 133,
        Quantity: 6,
        Discount: 83,
        Amount: 8864,
        Status: 'Shipped',
        Action: 'View',
        Date: '26/06/2023',
    },
    {
        orderId: 134,
        Quantity: 38,
        Discount: 91,
        Amount: 8903,
        Status: 'Shipped',
        Action: 'View',
        Date: '19/01/2024',
    },
    {
        orderId: 135,
        Quantity: 15,
        Discount: 36,
        Amount: 6841,
        Status: 'Delivered',
        Action: 'View',
        Date: '27/05/2023',
    },
    {
        orderId: 136,
        Quantity: 39,
        Discount: 29,
        Amount: 1209,
        Status: 'Shipped',
        Action: 'View',
        Date: '11/12/2023',
    },
    {
        orderId: 137,
        Quantity: 41,
        Discount: 26,
        Amount: 6473,
        Status: 'Processing',
        Action: 'View',
        Date: '22/12/2023',
    },
    {
        orderId: 138,
        Quantity: 28,
        Discount: 35,
        Amount: 6936,
        Status: 'Shipped',
        Action: 'View',
        Date: '01/07/2023',
    },
    {
        orderId: 139,
        Quantity: 6,
        Discount: 72,
        Amount: 9354,
        Status: 'Processing',
        Action: 'View',
        Date: '18/11/2023',
    },
    {
        orderId: 140,
        Quantity: 20,
        Discount: 13,
        Amount: 6359,
        Status: 'Shipped',
        Action: 'View',
        Date: '14/12/2023',
    },
    {
        orderId: 141,
        Quantity: 14,
        Discount: 27,
        Amount: 5458,
        Status: 'Processing',
        Action: 'View',
        Date: '29/12/2023',
    },
    {
        orderId: 142,
        Quantity: 43,
        Discount: 31,
        Amount: 914,
        Status: 'Processing',
        Action: 'View',
        Date: '17/03/2024',
    },
    {
        orderId: 143,
        Quantity: 38,
        Discount: 5,
        Amount: 4082,
        Status: 'Processing',
        Action: 'View',
        Date: '10/05/2023',
    },
    {
        orderId: 144,
        Quantity: 42,
        Discount: 56,
        Amount: 7140,
        Status: 'Processing',
        Action: 'View',
        Date: '26/08/2023',
    },
    {
        orderId: 145,
        Quantity: 31,
        Discount: 55,
        Amount: 8827,
        Status: 'Delivered',
        Action: 'View',
        Date: '02/03/2024',
    },
    {
        orderId: 146,
        Quantity: 9,
        Discount: 97,
        Amount: 2740,
        Status: 'Delivered',
        Action: 'View',
        Date: '24/11/2023',
    },
    {
        orderId: 147,
        Quantity: 50,
        Discount: 46,
        Amount: 6705,
        Status: 'Processing',
        Action: 'View',
        Date: '07/11/2023',
    },
    {
        orderId: 148,
        Quantity: 48,
        Discount: 64,
        Amount: 7612,
        Status: 'Processing',
        Action: 'View',
        Date: '28/11/2023',
    },
    {
        orderId: 149,
        Quantity: 14,
        Discount: 17,
        Amount: 8126,
        Status: 'Delivered',
        Action: 'View',
        Date: '15/12/2023',
    },
    {
        orderId: 150,
        Quantity: 35,
        Discount: 54,
        Amount: 3919,
        Status: 'Shipped',
        Action: 'View',
        Date: '21/02/2024',
    },
    {
        orderId: 151,
        Quantity: 39,
        Discount: 61,
        Amount: 400,
        Status: 'Shipped',
        Action: 'View',
        Date: '23/06/2023',
    },
    {
        orderId: 152,
        Quantity: 18,
        Discount: 30,
        Amount: 8496,
        Status: 'Processing',
        Action: 'View',
        Date: '18/04/2024',
    },
    {
        orderId: 153,
        Quantity: 32,
        Discount: 31,
        Amount: 9752,
        Status: 'Processing',
        Action: 'View',
        Date: '29/12/2023',
    },
    {
        orderId: 154,
        Quantity: 21,
        Discount: 64,
        Amount: 7592,
        Status: 'Processing',
        Action: 'View',
        Date: '23/05/2023',
    },
    {
        orderId: 155,
        Quantity: 33,
        Discount: 57,
        Amount: 6763,
        Status: 'Delivered',
        Action: 'View',
        Date: '16/07/2023',
    },
    {
        orderId: 156,
        Quantity: 26,
        Discount: 60,
        Amount: 228,
        Status: 'Delivered',
        Action: 'View',
        Date: '13/09/2023',
    },
    {
        orderId: 157,
        Quantity: 32,
        Discount: 2,
        Amount: 2007,
        Status: 'Delivered',
        Action: 'View',
        Date: '13/04/2024',
    },
    {
        orderId: 158,
        Quantity: 5,
        Discount: 68,
        Amount: 2892,
        Status: 'Delivered',
        Action: 'View',
        Date: '16/08/2023',
    },
    {
        orderId: 159,
        Quantity: 11,
        Discount: 24,
        Amount: 1733,
        Status: 'Processing',
        Action: 'View',
        Date: '21/03/2024',
    },
    {
        orderId: 160,
        Quantity: 17,
        Discount: 20,
        Amount: 9353,
        Status: 'Processing',
        Action: 'View',
        Date: '02/09/2023',
    },
    {
        orderId: 161,
        Quantity: 27,
        Discount: 59,
        Amount: 4368,
        Status: 'Delivered',
        Action: 'View',
        Date: '21/06/2023',
    },
    {
        orderId: 162,
        Quantity: 13,
        Discount: 15,
        Amount: 1701,
        Status: 'Delivered',
        Action: 'View',
        Date: '20/03/2024',
    },
    {
        orderId: 163,
        Quantity: 36,
        Discount: 79,
        Amount: 8548,
        Status: 'Processing',
        Action: 'View',
        Date: '05/07/2023',
    },
    {
        orderId: 164,
        Quantity: 10,
        Discount: 43,
        Amount: 1327,
        Status: 'Processing',
        Action: 'View',
        Date: '16/06/2023',
    },
    {
        orderId: 165,
        Quantity: 49,
        Discount: 31,
        Amount: 8486,
        Status: 'Delivered',
        Action: 'View',
        Date: '19/12/2023',
    },
    {
        orderId: 166,
        Quantity: 12,
        Discount: 98,
        Amount: 6518,
        Status: 'Delivered',
        Action: 'View',
        Date: '16/08/2023',
    },
    {
        orderId: 167,
        Quantity: 1,
        Discount: 5,
        Amount: 5975,
        Status: 'Shipped',
        Action: 'View',
        Date: '26/08/2023',
    },
    {
        orderId: 168,
        Quantity: 6,
        Discount: 92,
        Amount: 6288,
        Status: 'Delivered',
        Action: 'View',
        Date: '24/09/2023',
    },
    {
        orderId: 169,
        Quantity: 20,
        Discount: 47,
        Amount: 8490,
        Status: 'Shipped',
        Action: 'View',
        Date: '29/06/2023',
    },
    {
        orderId: 170,
        Quantity: 21,
        Discount: 55,
        Amount: 4964,
        Status: 'Processing',
        Action: 'View',
        Date: '09/08/2023',
    },
    {
        orderId: 171,
        Quantity: 22,
        Discount: 81,
        Amount: 1252,
        Status: 'Shipped',
        Action: 'View',
        Date: '29/07/2023',
    },
    {
        orderId: 172,
        Quantity: 5,
        Discount: 41,
        Amount: 448,
        Status: 'Delivered',
        Action: 'View',
        Date: '27/11/2023',
    },
    {
        orderId: 173,
        Quantity: 50,
        Discount: 87,
        Amount: 259,
        Status: 'Processing',
        Action: 'View',
        Date: '22/05/2023',
    },
    {
        orderId: 174,
        Quantity: 31,
        Discount: 39,
        Amount: 1755,
        Status: 'Processing',
        Action: 'View',
        Date: '04/09/2023',
    },
    {
        orderId: 175,
        Quantity: 34,
        Discount: 21,
        Amount: 9549,
        Status: 'Processing',
        Action: 'View',
        Date: '19/04/2024',
    },
    {
        orderId: 176,
        Quantity: 27,
        Discount: 16,
        Amount: 6713,
        Status: 'Processing',
        Action: 'View',
        Date: '13/09/2023',
    },
    {
        orderId: 177,
        Quantity: 35,
        Discount: 16,
        Amount: 2951,
        Status: 'Shipped',
        Action: 'View',
        Date: '20/03/2024',
    },
    {
        orderId: 178,
        Quantity: 31,
        Discount: 93,
        Amount: 2786,
        Status: 'Shipped',
        Action: 'View',
        Date: '25/02/2024',
    },
    {
        orderId: 179,
        Quantity: 7,
        Discount: 58,
        Amount: 934,
        Status: 'Shipped',
        Action: 'View',
        Date: '15/01/2024',
    },
    {
        orderId: 180,
        Quantity: 45,
        Discount: 46,
        Amount: 9164,
        Status: 'Delivered',
        Action: 'View',
        Date: '07/09/2023',
    },
    {
        orderId: 181,
        Quantity: 11,
        Discount: 18,
        Amount: 8341,
        Status: 'Shipped',
        Action: 'View',
        Date: '06/11/2023',
    },
    {
        orderId: 182,
        Quantity: 48,
        Discount: 79,
        Amount: 3220,
        Status: 'Shipped',
        Action: 'View',
        Date: '15/12/2023',
    },
    {
        orderId: 183,
        Quantity: 10,
        Discount: 71,
        Amount: 3582,
        Status: 'Delivered',
        Action: 'View',
        Date: '06/10/2023',
    },
    {
        orderId: 184,
        Quantity: 5,
        Discount: 100,
        Amount: 9949,
        Status: 'Shipped',
        Action: 'View',
        Date: '12/06/2023',
    },
    {
        orderId: 185,
        Quantity: 47,
        Discount: 67,
        Amount: 7582,
        Status: 'Processing',
        Action: 'View',
        Date: '31/05/2023',
    },
    {
        orderId: 186,
        Quantity: 4,
        Discount: 58,
        Amount: 5814,
        Status: 'Processing',
        Action: 'View',
        Date: '18/07/2023',
    },
    {
        orderId: 187,
        Quantity: 27,
        Discount: 76,
        Amount: 2531,
        Status: 'Shipped',
        Action: 'View',
        Date: '17/07/2023',
    },
    {
        orderId: 188,
        Quantity: 19,
        Discount: 51,
        Amount: 7715,
        Status: 'Processing',
        Action: 'View',
        Date: '24/03/2024',
    },
    {
        orderId: 189,
        Quantity: 30,
        Discount: 36,
        Amount: 2585,
        Status: 'Delivered',
        Action: 'View',
        Date: '01/01/2024',
    },
    {
        orderId: 190,
        Quantity: 22,
        Discount: 30,
        Amount: 1085,
        Status: 'Processing',
        Action: 'View',
        Date: '27/04/2024',
    },
    {
        orderId: 191,
        Quantity: 41,
        Discount: 87,
        Amount: 5169,
        Status: 'Processing',
        Action: 'View',
        Date: '27/06/2023',
    },
    {
        orderId: 192,
        Quantity: 44,
        Discount: 94,
        Amount: 3084,
        Status: 'Delivered',
        Action: 'View',
        Date: '09/05/2023',
    },
    {
        orderId: 193,
        Quantity: 31,
        Discount: 30,
        Amount: 9010,
        Status: 'Shipped',
        Action: 'View',
        Date: '29/09/2023',
    },
    {
        orderId: 194,
        Quantity: 17,
        Discount: 17,
        Amount: 2189,
        Status: 'Shipped',
        Action: 'View',
        Date: '04/07/2023',
    },
    {
        orderId: 195,
        Quantity: 50,
        Discount: 10,
        Amount: 1268,
        Status: 'Delivered',
        Action: 'View',
        Date: '12/11/2023',
    },
    {
        orderId: 196,
        Quantity: 18,
        Discount: 60,
        Amount: 7231,
        Status: 'Shipped',
        Action: 'View',
        Date: '03/10/2023',
    },
    {
        orderId: 197,
        Quantity: 39,
        Discount: 10,
        Amount: 4080,
        Status: 'Shipped',
        Action: 'View',
        Date: '26/10/2023',
    },
    {
        orderId: 198,
        Quantity: 50,
        Discount: 7,
        Amount: 738,
        Status: 'Delivered',
        Action: 'View',
        Date: '01/07/2023',
    },
    {
        orderId: 199,
        Quantity: 45,
        Discount: 97,
        Amount: 6168,
        Status: 'Processing',
        Action: 'View',
        Date: '26/02/2024',
    },
    {
        orderId: 200,
        Quantity: 40,
        Discount: 80,
        Amount: 7220,
        Status: 'Processing',
        Action: 'View',
        Date: '04/12/2023',
    },
];
import { Column } from 'react-table';
import { useMyOrdersQuery } from "../redux/api/orderAPI";
import { useSelector } from "react-redux";
import { getStatusColor } from "../utils/style";
import { Link } from "react-router-dom";
import { CustomError } from "../types/api-types";
import toast from "react-hot-toast";
import TableHOC from "../components/admin/TableHOC";
import TableSkeleton from "../components/skeletons/TableSkeleton";
import { RootState } from "../redux/store";
import { formatDate } from "../utils/date";

export const columns: Column<OrderTableInterface>[] = [
    {
        Header: 'OrderId',
        accessor: 'orderId',
    },
    {
        Header: 'Quantity',
        accessor: 'quantity',
    },
    {
        Header: 'Discount',
        accessor: 'discount',
    },
    {
        Header: 'Amount',
        accessor: 'amount',
    },
    {
        Header: 'Purchase_Date',
        accessor: 'purchase_date',
    }, {
        Header: 'Last_Updated',
        accessor: 'last_updated',
    },
    {
        Header: 'Status',
        accessor: 'status',
    },
    {
        Header: 'Action',
        accessor: 'action',
    },
];


const Orders = () => {
    const { user } = useSelector((state: RootState) => state.userReducer);

    const { isLoading, data, isError, error } = useMyOrdersQuery(user?._id as string);
    console.log(data?.orders);

    const [rows, setRows] = useState<OrderTableInterface[]>([]);

    if (isError) {
        const err = error as CustomError;
        toast.error(err.data.message);
    }

    useEffect(() => {
        if (data) {
            setRows(data.orders.map((order) => {
                return {
                    orderId: order._id,
                    quantity: order.orderItems.length,
                    discount: order.discount,
                    amount: order.total,
                    status: <Link to="/" className={`${getStatusColor(order.status)} bg-slate-900 px-3 py-1 dark:bg-slate-100 rounded-full font-bold`}>{order.status}</Link>,
                    action: <Link className="bg-blue-500 px-3 py-1 hover:bg-blue-600 rounded-full font-semibold text-slate-100" to={`/order/${order._id}`}>View</Link>,
                    purchase_date: formatDate(order.createdAt),
                    last_updated: formatDate(order.updatedAt),

                };
            }));
        }
    }, [data, user]);

    const Table = TableHOC<OrderTableInterface>(
        columns,
        rows,
        'bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-100 w-full overflow-x-auto h-[500px] mt-4',
        "Orders",
        true
    );

    return <>{isLoading ? <TableSkeleton /> : <Table />}</>;
}

export default Orders