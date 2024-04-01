function beforSubmit() {
    let outputdate = document.querySelector(".outPutDate");
    let inputdate = document.querySelector(".inputDate");
    console.log("inputdate.value"); // String form convert into Date form(en_IN)

    let formattedDate = new Date(inputdate.value).toLocaleDateString(en-IN);
    outputdate.value =formattedDate;
}