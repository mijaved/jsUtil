//----------------------BENGALI-------------------
//https://en.wikibooks.org/wiki/Bengali/Numbers
var a1 = ['','এক ','দুই ','তিন ','চার ', 'পাঁচ ','ছয় ','সাত ','আট ','নয় ','দশ ',
'এগার ','বার ','তের ','চৌদ্দ ','পনের  ','ষোল ','সতের ','আঠার ','ঊনিশ ', 'বিশ ', 
'একুশ ','বাইশ ','তেইশ ','চব্বিশ ','পঁচিশ ','ছাব্বিশ ','সাতাশ ','আটাশ ','ঊনত্রিশ ', 'ত্রিশ ',
'একত্রিশ ','বত্রিশ ','তেত্রিশ ','চৌত্রিশ ','পঁয়ত্রিশ ','ছত্রিশ ','সাঁইত্রিশ ','আটত্রিশ ','ঊনচল্লিশ ', 'চল্লিশ ',
'একচল্লিশ ','বিয়াল্লিশ ','তেতাল্লিশ ','চুয়াল্লিশ ','পঁয়তাল্লিশ ','ছেচল্লিশ ','সাতচল্লিশ ','আটচল্লিশ ','ঊনপঞ্চাশ ', 'পঞ্চাশ ',
'একান্ন ','বায়ান্ন ','তিপ্পান্ন ','চুয়ান্ন ','পঞ্চান্ন ','ছাপ্পান্ন ','সাতান্ন ','আটান্ন ','ঊনষাট ', 'ষাট ',
'একষট্টি ','বাষট্টি ','তেষট্টি ','চৌষট্টি ','পঁয়ষট্টি ','ছেষট্টি ','সাতষট্টি ','আটষট্টি ','ঊনসত্তর ', 'সত্তর ',
'একাত্তর ','বাহাত্তর ','তিয়াত্তর ','চুয়াত্তর ','পঁচাত্তর ','ছিয়াত্তর ','সাতাত্তর ','আটাত্তর ','ঊনআশি ', 'আশি ',
'একাশি ','বিরাশি ','তিরাশি ','চুরাশি ','পঁচাশি ','ছিয়াশি ','সাতাশি ','আটাশি ','ঊননব্বই ', 'নব্বই ',
'একানব্বই ','বিরানব্বই ','তিরানব্বই ','চুরানব্বই ','পঁচানব্বই ','ছিয়ানব্বই ','সাতানব্বই ','আটানব্বই ','নিরানব্বই ',];
var b1 = ['', '', 'বিশ','ত্রিশ','চল্লিশ','পঞ্চাশ', 'ষাট','সত্তর','আশি','নব্বই'];

function inWordsBn (num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a1[Number(n[1])] || b1[n[1][0]] + ' ' + a[n[1][1]]) + 'কোটি ' : '';
    str += (n[2] != 0) ? (a1[Number(n[2])] || b1[n[2][0]] + ' ' + a[n[2][1]]) + 'লাখ ' : '';
    str += (n[3] != 0) ? (a1[Number(n[3])] || b1[n[3][0]] + ' ' + a[n[3][1]]) + 'হাজার ' : '';
    str += (n[4] != 0) ? (a1[Number(n[4])] || b1[n[4][0]] + ' ' + a[n[4][1]]) + 'শত ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'এবং ' : '') + (a1[Number(n[5])] || b1[n[5][0]] + ' ' + a1[n[5][1]]) + 'মাত্র ' : '';
    return str;
}