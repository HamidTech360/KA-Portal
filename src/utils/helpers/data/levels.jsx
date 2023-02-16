export const levels = [
    {label:'Primary 1', value:'1', arabicLabel:'الأول الإبتدائيي'},
    {label:'Primary 2', value:'2' , arabicLabel:'الثاني الإبتدائيي'},
    {label:'Primary 3', value:'3', arabicLabel:'الثالث الإبتدائيي'},
    {label:'Primary 4', value:'4', arabicLabel:'الرابع الإبتدائيي'},
    {label:'JSS 1', value:'5', arabicLabel:'الأول المتوسط'},
    {label:'JSS 2', value:'6' , arabicLabel:'الثاني المتوسط'},
    {label:'JSS 3', value:'7' , arabicLabel:'الثالث المتوسط'},
    {label:'SSS 1', value:'8', arabicLabel:'الأول الثانوي'},
    {label:'SSS 2', value:'9', arabicLabel:'الثاني الثانوي'},
    {label:'SSS 3', value:'10', arabicLabel:'الثالث الثانوي'},
    {label:'Graduated', value:'11', arabicLabel:'متخرج '},
    {label:'Not Active', value:"12", arabicLabel:'متعطل'}
]

export const getStudentClass = (level)=>{
    const itemIndex = levels.findIndex(el=>el.value==level)
    return levels[itemIndex]?.arabicLabel
}