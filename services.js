const JOB_CATEGORY = {

    createJobCategry : function(name, role, title, image){
        const FormD = new FormData();
        FormD.append("name", name);
        FormD.append("role", role);
        FormD.append("title", title);
        FormD.append("image", $("#image").prop("files")[0]);
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8000/api/createjobcategory',
            cache: false,
            processData: false, 
            data: FormD,
                            
            contentType: false,

                error: function (request, status, error) {
                    console.error(request.responseText);
                }
        });
    },

    createplan : function(plan_name, price, extra_details, features, billing_duration, description){
        const FormD = new FormData();
        FormD.append("plan_name", plan_name);
        FormD.append("price", price);
        FormD.append("extra_details", extra_details);
        FormD.append("features", features);
        FormD.append("billing_duration", billing_duration);
        FormD.append("description", description);

        $.ajax({
            type: 'POST',
            url: 'http://localhost:8000/api/createplan',
            cache: false,
            processData: false, 
            data: FormD,
                            
            contentType: false,

                error: function (request, status, error) {
                    console.error(request.responseText);
                }
        });

    },

    addplanfeature : function(plan_name, feature){
        const FormD = new FormData();
        FormD.append("plan_name", plan_name);
        FormD.append("feature", feature);
        
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8000/api/addplanfeature',
            cache: false,
            processData: false, 
            data: FormD,
                            
            contentType: false,

                error: function (request, status, error) {
                    console.error(request.responseText);
                }
        });

    },

    generalcontent : function(name, description, comment){
        const FormD = new FormData();
        FormD.append("name", name);
        FormD.append("description", description);
        FormD.append("comment", comment);

        
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8000/api/creategeneralcontent',
            cache: false,
            processData: false, 
            data: FormD,
                            
            contentType: false,

                error: function (request, status, error) {
                    console.error(request.responseText);
                }
        });
    },

    createcasestudy : function(description, title, image){
        const FormD = new FormData();
        FormD.append("description", description);
        FormD.append("title", title);
        FormD.append("image", $("#image").prop("files")[0]);
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8000/api/createcasestudy',
            cache: false,
            processData: false, 
            data: FormD,
                            
            contentType: false,

                error: function (request, status, error) {
                    console.error(request.responseText);
                }
        });
    },
    
    
}