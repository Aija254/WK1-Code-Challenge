/*
Create a basic payroll whose major task is to calculate an individuals
Net salary by getting the inputs basic salary and benefits.
Create 5 different class methods which will calculate the;
payee,NHIF Deductions,NSSF Deductions,Gross salary and Net Salary.
*/
 const prompt = require("prompt-sync") ();

 const monthlyGrossPay = prompt("Monthly gross salary?")

 const nssf =prompt("Other pension schemes apart from nssf?(yes or no):")

 //function to calculate Paye
 function monthlyPaye(PayeDeduction) {
    if (monthlyGrossPay > 0 && monthlyGrossPay <= 24000) {
        PayeDeduction = monthlyGrossPay * 0.1
        return PayeDeduction
    }else if (monthlyGrossPay >= 24001 && monthlyGrossPay <= 32333) {
        PayeDeduction = monthlyGrossPay * 0.25
        return PayeDeduction
    }else {
        PayeDeduction = monthlyGrossPay * 0.3
        return PayeDeduction
    }
 }
 monthlyPaye()

//function to calculate NHIF
 function NHIFDeductions (NHIFRate) {
    if (monthlyGrossPay > 0 && monthlyGrossPay < 6000) {
        NHIFRate = 150
        return NHIFRate
    } else if (monthlyGrossPay >= 6000 && monthlyGrossPay < 8000) {
        NHIFRate = 300
        return NHIFRate
    } else if (monthlyGrossPay >= 8000 && monthlyGrossPay < 12000) {
        NHIFRate = 400
        return NHIFRate
    } else if (monthlyGrossPay >= 12000 && monthlyGrossPay < 15000) {
        NHIFRate = 500
        return NHIFRate
    } else if (monthlyGrossPay >= 15000 && monthlyGrossPay < 20000) {
        NHIFRate = 600
        return NHIFRate
    } else if (monthlyGrossPay >= 20000 && monthlyGrossPay < 25000) {
        NHIFRate = 750
        return NHIFRate
    } else if (monthlyGrossPay >= 25000 && monthlyGrossPay < 30000) {
        NHIFRate = 850
        return NHIFRate
    } else if (monthlyGrossPay >= 30000 && monthlyGrossPay < 35000) {
        NHIFRate = 900
        return NHIFRate
    } else if (monthlyGrossPay >= 35000 && monthlyGrossPay < 40000) {
        NHIFRate = 950
        return NHIFRate
    } else if (monthlyGrossPay >= 40000 && monthlyGrossPay < 45000) {
        NHIFRate = 1000
        return NHIFRate
    } else if (monthlyGrossPay >= 45000 && monthlyGrossPay < 50000) {
        NHIFRate = 1100
        return NHIFRate
    } else if (monthlyGrossPay >= 50000 && monthlyGrossPay < 60000) {
        NHIFRate = 1200
        return NHIFRate
    } else if (monthlyGrossPay >= 60000 && monthlyGrossPay < 70000) {
        NHIFRate = 1300
        return NHIFRate
    } else if (monthlyGrossPay >= 70000 && monthlyGrossPay < 80000) {
        NHIFRate = 1400
        return NHIFRate
    } else if (monthlyGrossPay >= 80000 && monthlyGrossPay < 90000) {
        NHIFRate = 1500
        return NHIFRate
    } else if (monthlyGrossPay >= 90000 && monthlyGrossPay < 100000) {
        NHIFRate = 1600
        return NHIFRate
    } else {
        NHIFRate = 1700
        return NHIFRate
    }
}
NHIFDeductions()


//Function that calculates NSSF
function NSSFDeductions () {
    const lowerEarningsLimit = 6000
    const upperEarningsLimit = 18000
    const rate = 0.06

    //tier1 has a minimum pensionable income limit of Ksh 6,000
    if (tierNSSF === 'yes' || tierNSSF === 'Yes') {
        function tierI () {
            if (monthlyGrossPay <= lowerEarningsLimit) {
                return monthlyGrossPay * rate
            } else {
                return lowerEarningsLimit * rate
            }
        }
        return tierI()
    //tier2 has a maximum pensionable income limit of Ksh 18,000
    } else if (tierNSSF === 'no' || tierNSSF === 'No') {
        function tierII () {
            let pensionableEarnings
            let tier2
            if (monthlyGrossPay <= lowerEarningsLimit) {
                return 0 + (monthlyGrossPay * rate)
            } else if (monthlyGrossPay > lowerEarningsLimit && monthlyGrossPay <= upperEarningsLimit) {
                pensionableEarnings = monthlyGrossPay - lowerEarningsLimit
                tier2 = pensionableEarnings * rate
                return tier2 + (lowerEarningsLimit * rate)
            } else if (monthlyGrossPay > upperEarningsLimit) {
                pensionableEarnings = upperEarningsLimit - lowerEarningsLimit
                tier2 = pensionableEarnings * rate
                return tier2 + (lowerEarningsLimit * rate)
            }
        }   
        return tierII()
    }
}
NSSFDeductions()

//Function that calculates net salary by deducting PAYE, NHIF and NSSF from Gross Salary
function netSalary(gross, paye, nhif, nssf) {
    const total = gross - paye - nhif - nssf
    return `PAYE tax = ${paye}\nNHIF deductions = ${nhif}\nNSSF deduction = ${nssf}\nNet Salary = ${total}`
}
console.log(netSalary(monthlyGrossPay, monthlyPAYE(), NHIFDeductions(), NSSFDeductions()))