function Validator(formSelector) {
    let _this = this;
    var formRules = {};


    function getParent(element, selector){
        
        while(element.parentElement){
            if(element.parentElement.matches(selector)){
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }


    var validatorRule = {
        required: function(value) {
            return value ? undefined : 'Vui lòng nhập trường này !';
        },
        email: function(value) {
            var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return regex.test(value) ? undefined : 'Vui lòng nhập email !';
        },
        min: function(min) {
                return function(value){
                    return value.length >= min ? undefined :  `Vui lòng nhập ${min} kí tự !`;
                }
        },
        max: function(max) {
            return function(value){
                return value.length <= max ? undefined :  `Vui lòng nhập ${max} kí tự !`;
            }
        },
    };
    // Lấy formElement
    var formElement = document.querySelector(formSelector);

    // Kiểm tra đã lấy được form chưa ?
    if (formElement) {
        var inputs = formElement.querySelectorAll('[name][rules]');
        for(var input of inputs)
        {
            var rules = input.getAttribute('rules').split('|');
            for(var rule of rules){

                var ruleInfo;
                var isRuleHasValue = rule.includes(':');

                if(isRuleHasValue)
                {
                    ruleInfo = rule.split(':');
                    rule = ruleInfo[0];
                }

                var ruleFunc = validatorRule[rule];

                if(isRuleHasValue){
                    ruleFunc = ruleFunc(ruleInfo[1]);
                }
                
                if(Array.isArray(formRules[input.name])){
                    formRules[input.name].push(ruleFunc);
                }else{
                    formRules[input.name] = [ruleFunc];
                }
            }

        // Xử lý các sự kiện của người dùng

        input.onblur = handleValidator;
        input.oninput = handleClearValidator;
        }
        // Hàm thực hiện validator
        function handleValidator(event){
            var rules = formRules[event.target.name];
            var errorMessage;
            for(var rule of rules)
            {
                errorMessage = rule(event.target.value);
                if(errorMessage) break;
            }


            // Nếu có lỗi thì sẽ hiển thị lỗi ra
            if(errorMessage){
                var formGroup =  getParent(event.target, '.form-group');

                if(formGroup){
                    formGroup.classList.add('invalid');
                    var formMessage = formGroup.querySelector('.form-message');
                    if(formMessage){
                        formMessage.innerText = errorMessage;
                    }
                }
            }
                    return !errorMessage;
        }
        // Hàm thực hiện clear validator khi input có dữ liệu
        function handleClearValidator(event){

            var formGroup =  getParent(event.target, '.form-group');

            if(formGroup.classList.contains('invalid')){
                formGroup.classList.remove('invalid');
                var formMessage = formGroup.querySelector('.form-message');
                if(formMessage){
                    formMessage.innerText = '';
                }
            }
        }
    }

    formElement.onsubmit = function(event){
        event.preventDefault();
        var inputs = formElement.querySelectorAll('[name][rules]');
        var isValid = true;

        for(var input of inputs){
            if(!handleValidator({target: input})){
                isValid = false;
            }
        }
        // Khi không có lỗi thì submit form
        if(isValid){
            if(typeof _this.onSubmit === 'function'){

                var enableInputs = formElement.querySelectorAll('[name]');
                var formValues = Array.from(enableInputs).reduce(function(values, input) {
                    
                    switch (input.type) {
                        case 'radio':
                            values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                            break; 
                        case 'checkbox':
                            if(!input.matches(':checked')) return values;
                            if(!Array.isArray(values[input.name]))
                            {
                                values[input.name] = [];
                            }
                            values[input.name].push(input.name);
                            break;   
                        case 'file':
                            values[input.name] = input.files;
                            break; 
                        default:
                            (values[input.name] = input.value);

                    }
                    return values;
                   },{});
                
                // Gọi lại hàm submit và trả về dữ liệu của form
                _this.onSubmit(formValues);
            }
            else{
                formElement.submit();
            }
        }
    }
}