$(document).ready(function () {
    //Check
    function isNotSpecial(strRegex){
        var isNotSpecial = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]/
        return isNotSpecial.test(strRegex);
    }

    //check phone
    function isPhoneNumber(strRegex){
        var phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
        return phoneRegex.test(strRegex)
    }

    //Check zip code
    function isZipCode(strRegex){
        var isZipCode = /^[0-9]{5}$/
        return isZipCode.test(strRegex)
    }

    //Check zip code
    function isCVV(strRegex){
        var isCVV = /^[0-9]{3}$/
        return isCVV.test(strRegex)
    }

    //Check isEmail
    function isEmail(strRegex){
        var isEmail = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/
        return isEmail.test(strRegex)
    }

    //Check credit card
    function isCreditCard(stringRex){
        const isCreaditCard = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/
        return isCreaditCard.test(stringRex);
    }

    //Check Month
    function isMonth(stringRex){
        const isMonth = /^(0?[1-9]|1[012])$/
        return isMonth.test(stringRex);
    }

    //Check Year
    function isYear(stringRex){
        const isYear = /^[0-9]{4}$/
        if(isYear.test(stringRex)){
            if(parseInt(stringRex) > 2000){
                return true
            }else{
                return false
            }
        }else{
            return false
        }
    }
    function isAddress(stringRex){
        const isAddress = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]/
        return isAddress.test(stringRex);
    }
    
    $("#add-infor").click(function (e) { 
        
        e.preventDefault();
        let first_name = $("#first-name").val().trim();
        let last_name = $("#last-name").val().trim();
        let address = $("#address").val().trim();
        let email = $("#email").val().trim();
        let phone = $("#phone").val().trim();
        let state = $("#state option:selected").text().trim();
        let city = $("#city").val().trim();
        let zip_code = $("#zip").val().trim();
        let name_card = $("#name-card").val().trim();
        let credit_card = $("#credit-card").val().trim();
        let exp_month = $("#exp-month").val().trim();
        let exp_year = $("#exp-year").val().trim();
        let cvv = $("#cvv").val().trim();
        //check first name
        if(!isNotSpecial(first_name)){
            $("#first-name-error").html("First name wrong format !!!")
        }else{
            $("#first-name-error").html("");
        }

        //check last name
        if(!isNotSpecial(last_name)){
            $("#last-name-error").html("Last name wrong format !!!")
        }else{
            $("#last-name-error").html("");
        }

        //check Email
        if(!isEmail(email)){
            $("#email-error").html("Email wrong format !!!")
        }else{
            $("#email-error").html("");
        }

        //check Phone
        if(!isPhoneNumber(phone)){
            $("#phone-error").html("Phone wrong format !!!")
        }else{
            $("#phone-error").html("");
        }

        //check last name
        if(!isAddress(address)){
            $("#address-error").html("Address wrong format !!!")
        }else{
            $("#address-error").html("");
        }

        //check City
        if(!isNotSpecial(city)){
            $("#city-error").html("City wrong format !!!")
        }else{
            $("#city-error").html("");
        }

        //check Zip Code
        if(!isZipCode(zip_code)){
            $("#zip-error").html("Zip code wrong format !!!")
        }else{
            $("#zip-error").html("");
        }

        //check Name card
        if(!isNotSpecial(name_card)){
            $("#name-card-error").html("Name on card wrong format !!!")
        }else{
            $("#name-card-error").html("");
        }

        //check credit card
        if(!isCreditCard(credit_card)){
            $("#credit-card-error").html("Credit card wrong format !!!")
        }else{
            $("#credit-card-error").html("");
        }

        //check Month
        if(!isMonth(exp_month)){
            $("#exp-month-error").html("Exp month wrong format !!!")
        }else{
            $("#exp-month-error").html("");
        }

        //check Year
        if(!isYear(exp_year)){
            $("#exp-year-error").html("Exp year wrong format !!!")
        }else{
            $("#exp-year-error").html("");
        }

        //check CVV
        if(!isCVV(cvv)){
            $("#cvv-error").html("CVV wrong format !!!")
        }else{
            $("#cvv-error").html("");
        }

        //Check state
        if($("#state").val() == "default"){
            $("#state-error").html("Please select item !!!")
        }else{
            $("#state-error").html("")
        }

        //check box
        if($("#check-me-out").is(":checked")){
            $("#check-me-out-error").html("")
        }else{
            $("#check-me-out-error").html("Please select item !!!")
        }

        var html = 
        "<tr>"
        +"<td>"
        +    "<span class='custom-checkbox'>"
        +        "<input type='checkbox' id='checkbox1' name='' value='1'>"
        +        "<label for='checkbox1'></label>"
        +    "</span>"
        +"</td>"
        +"<td>"+first_name+"</td>"
        +"<td>"+last_name+"</td>"
        +"<td>"+email+"</td>"
        +"<td>"+phone+"</td>"
        +"<td>"+address+"</td>"
        +"<td>"+city+"</td>"
        +"<td>"+state+"</td>"
        +"<td>"+zip_code+"</td>"
        +"<td>"+name_card+"</td>"
        +"<td>"+credit_card+"</td>"
        +"<td>"+exp_month+"</td>"
        +"<td>"+exp_year+"</td>"
        +"<td>"+cvv+"</td>"
        +"<td>"
        +   "<a href='#' class='edit' data-toggle='modal'><i class='fa fa-pencil'></i></a>"
        +   "<a href='#' class='delete' data-toggle='modal'><i class='fa fa-trash-o'></i></a>"
        +"</td>"
        +"</tr>"
        if(isNotSpecial(first_name) && isNotSpecial(last_name) && isEmail(email) && isPhoneNumber(phone) && isNotSpecial(city) && isAddress(address) && ($("#state").val() != "default") 
            && isZipCode(zip_code) && isNotSpecial(name_card) && isCreditCard(credit_card) && isMonth(exp_month) && isYear(exp_year) && isCVV(cvv) && $("#check-me-out").is(":checked")){
            $('#table-employee').append(html);
            return;
        }

    });

    //format creadit
    $('#credit-card').keyup(function() {
        cc = $(this).val().split("-").join("");
        cc = cc.match(new RegExp('.{1,4}$|.{1,4}', 'g')).join("-");
        $(this).val(cc);
    
    });

    // Select/Deselect checkboxes
    $("#selectAll").click(function () {
        var checkbox = $('table tbody input[type="checkbox"]');
        if (this.checked) {
            checkbox.each(function () {
            this.checked = true;
            });
        }
        else {
            checkbox.each(function () {
            this.checked = false;
            });
        }
    });

    $('table tbody input[type="checkbox"]').click(function () {
        if (!this.checked) {
            $("#selectAll").prop("checked", false);
        }
    });


    $("#add-employee").click(function (e) { 
        $('#table-employee').append(html);
    });

    console.log($('table tbody input[type="checkbox"]').parent().parent().parent())

    $("#remove-employee").click(function (e) {
        var checkbox = $('table tbody input[type="checkbox"]');
        checkbox.each(function () {
            if (this.checked) {
                $('table tbody input[type="checkbox"]:checked').parent().parent().parent().remove(); 
            }
        });
    });

    
    //Delete row
    $("#table-employee").on("click", ".delete", function() {
        $(this).closest("tr").remove();
    });

    //Edit row
    $(".edit").click(function () {
        var row_index = $(this).index('.edit');
        var table = $("#table-employee tbody");
        var index = 0;
        table.find('tr').each(function (i, element) {
            if (index == row_index) {
                var finded_td = $(this).find('td');
                    first_name = finded_td.eq(1).text();
                    last_name = finded_td.eq(2).text()
                    email = finded_td.eq(3).text();
                    phone = finded_td.eq(4).text();
                    address = finded_td.eq(5).text();
                    city = finded_td.eq(6).text();
                    state = finded_td.eq(7).text();
                    zip_code = finded_td.eq(8).text();
                    name_card = finded_td.eq(9).text();
                    credit_card = finded_td.eq(10).text();
                    exp_month = finded_td.eq(11).text();
                    exp_year = finded_td.eq(12).text();
                    cvv = finded_td.eq(13).text();

                $("#first-name").val(first_name)
                $("#last-name").val(last_name)
                $("#email").val(email);
                $("#phone").val(phone);
                $("#address").val(address);
                $("#city").val(city);
                $("#state option:selected").text();
                $("#zip").val(zip_code);
                $("#name-card").val(name_card);
                $("#credit-card").val(credit_card);
                $("#exp-month").val(exp_month);
                $("#exp-year").val(exp_year);
                $("#cvv").val(cvv);
                $('#state option[value=' + state + ']').prop('selected',true);
            }
            index++;
        });
    });


    
});

