<?php
defined('BASEPATH') OR exit('Access Denied');

/**
 * Description of Genlib
 * Class deals with functions needed in multiple controllers to avoid repetition in each of the controllers
 *
 * 
 * */

 class Genlib {
     protected $CI;

     public function __construct() {
        $this->CI = &get_instance();
    }


   /**
     * 
     * @return string
     */
    public function checkLogin() {
        if (empty($_SESSION['admin_id'])) {
            //redirect to log in page            
            redirect(base_url() . '?red_uri=' . uri_string()); //redirects to login page
        } 
        
        else {
            return "";
        }
    }

    /**
     * Ensure request is an AJAX request
     * @return string
     */
    public function ajaxOnly(){
        //display uri error if request is not from AJAX
        if(!$this->CI->input->is_ajax_request()){
            redirect(base_url());
        }
        
        else{
            return "";
        }
    } 
    
    /**
     * 
     */
    public function superOnly() {
        //prevent access if user is not logged in or role is not "Super"
        if (empty($_SESSION['admin_id']) || (isset($_SESSION['admin_role']) && $_SESSION['admin_role'] !== "Super")) {
            redirect(base_url());
        }
    }

 } // end of file