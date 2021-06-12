/**
 * Title: Application server
 * Description: Server turn on or run method
 * Author: Jagadish Chakma
 * Date: 12-06-2021
 * Version: 1.0.0
 */

function createServer(app){
    const port = process.env.PORT;
    app.listen(port, () => {
        console.log(`server is running on port ${port}`);
    });
};

module.exports = createServer;