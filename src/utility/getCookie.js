let cookie = {
    clear: () => {
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    },
    get: (name) => {
        return document.cookie.split('; ').map(cookie => cookie.split('=')).find(([key]) => key === name)?.[1] || null;
    }
}

export {
    cookie
}