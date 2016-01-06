var _ = require('lodash')
    , env = require('./env')
    ;

module.exports = _.merge({
    /*
     * Some default settings. 
     *
     * You can generally leave this as is for general testing purposes.
     */
    simulation: true
    , instance_id: 'local_test_instance'
    , urls: {
        home: "http://rundexter.com/"
    }
    , instance_state: {
        active_step :  "local_test_step"
    }
    , workflow: {
        "id" : "local_test_workflow"
        , "title": "Local test workflow"
        , "description": "A fixture workflow used to test a module"
    }
    , steps: {
        local_test_step: {
            id: 'local_test_step'
            , type: 'module'
            //The test runner will change YOUR_MODULE_NAME to the correct module name
            , name: 'YOUR_MODULE_NAME'
            , next: []
        }
    }
    , modules: {
        //The test runner will add the proper data here
    }
    /*
     * End defaults
     */
    , environment: {
       /*
        * Any API keys you might need should go in the env.js.
        * For example:
        *
        "parse_app_id": "abc123"
        , "parse_app_key": "foobar"
        */
    }
    , user: {
        /*
         * Your dexter user settings should go in the env.js file and remain uncommitted.  
         * For example:
         *
        profile: {
            id: 1,
            api_key: 'apikeytest'
        }
         */
    }
    , data: {
        local_test_step: {
            /*
             * You should update this section with some test input for testing your module
             */
            input: {
                //Replace VAR1 with the name of an expected input, and add more inputs as needed.
                "authorId": "19d225904cefbecfcb290ed2eb59d8cafa832c84af70aef1bcd326b60f9975262",
                "title": "Liverpool FC",
                "contentFormat": "html",
                "content": "<h1>Liverpool FC</h1><p>You’ll never walk alone.</p>",
                "canonicalUrl": "http://jamietalbot.com/posts/liverpool-fc",
                "tags": ["football", "sport", "Liverpool"],
                "publishStatus": "public"
            }
        }
    }
}, env);
