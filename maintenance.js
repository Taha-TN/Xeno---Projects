/*
========================================
XENO PROJECTS - MAINTENANCE MODE
========================================

true  = WEBSITE UNDER MAINTENANCE
false = WEBSITE LIVE
*/

const MAINTENANCE_MODE = true;


/*
========================================
DO NOT EDIT BELOW THIS LINE
========================================
*/

(function () {

    const maintenancePage = "maintenance.html";

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    if (
        MAINTENANCE_MODE &&
        currentPage !== maintenancePage
    ) {
        window.location.replace(maintenancePage);
    }

})();
