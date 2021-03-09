const fieldListFirst = ["field_productionYear", "field_registrationYear", "field_age"]
const fieldList = fieldListFirst.concat(["field_capacity", "field_doors", "field_namePerson"])
const typeList = ["car", "motor", "truck"]

function firstValidate() {
    if (allValidate(fieldListFirst)) {
        let params = [];
        params.push(getType());
        params.push(document.getElementById("field_brand").value)
        params=getInputValue(params);

        alert("Next page")
        window.location.href = "moreInformations.html?" + "type=" + params[0] + "&brand=" + params[1] + "&productionYear=" + params[2] + "&firstRegistration=" + params[3] + "&age=" + params[4];
    }
}

function getType(){
    for (let index = 0; index < typeList.length; index++) {
        if (document.getElementById(typeList[index]).checked == true) {
            return typeList[index];
        }
    }
}

function getInputValue(params){
    for (let index = 0; index < fieldListFirst.length; index++) {
        const element = fieldListFirst[index];
        try {
            params.push(document.getElementById(element).value);
        } catch (error) {
            console.error("couldn't find element " + element);
        }
    }
    return params;
}

function validateInsurance() {
    if (allValidate(fieldList)) {
        alert("Please wait for our consultant to contact you")
        window.location.href = "auto.html";
    }
}

function allValidate(elementsList) {
    for (let index = 0; index < elementsList.length; index++) {
        const element = elementsList[index];
        try {
            if (isEmpty(document.getElementById(element).value)) {
                alert("Please fill all fields");
                return false;
            }
        } catch (error) {
            console.error("couldn't find element " + element);
        }
    }
    return true;
}

function isEmpty(str) {
    return !str.trim().length;
}

function getParam(parametr) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(parametr);
}

function getParams() {
    document.getElementById(getParam("type")).checked = true;
    document.getElementById("field_brand").value = getParam("brand");
    document.getElementById("field_productionYear").value = getParam("productionYear");
    document.getElementById("field_registrationYear").value = getParam("firstRegistration");
    document.getElementById("field_age").value = getParam("age");
}