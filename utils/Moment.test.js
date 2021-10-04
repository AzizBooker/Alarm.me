import { getRelativeTimeFromNow } from "./Moment";

test('Checks difference between a day difference',()=>{
    expect(getRelativeTimeFromNow('Monday, 11:04 am','Tuesday, 11:04 am')).toBe('24 Hours and 0 Minutes')
})
test('checks difference between a hour difference',()=>{
    expect(getRelativeTimeFromNow('Monday, 10:04 am',"Monday, 11:04 am")).toBe("1 Hours and 0 Minutes")
})

test('Checks difference of same time',()=>{
    expect(getRelativeTimeFromNow('Monday, 11:04 am',"Monday, 11:04 am")).toBe("0 Hours and 0 Minutes")
})
test('checks difference of 10 minutes',()=>{
    expect(getRelativeTimeFromNow('Monday, 11:00 am',"Monday, 11:10 am")).toBe('0 Hours and 10 Minutes')
})