const verifyRoles = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req?.roles) return res.sendstatus(401);
        const rolesArray = [...allowedRoles];
        const result = req.roles.map(role => rolesArray.includes(role)).find(val => val === true);   //map creates a new array & true and false for everthing in the request array
        if (!result) return res.sendStatus(401);
        next();
    }
}

module.exports = verifyRoles 