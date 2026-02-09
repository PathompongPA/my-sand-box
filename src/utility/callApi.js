let fetchApi = {
    ByJson: async (method, path, body) => {
        let url = `https://carrent88.com${path}`
        return await fetch(
            url,
            {
                method,
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body
            })
            .then(res => res.json())
    },
    ByFormData: async (method, path, body) => {
        return await fetch(
            `${location.hostname}${path}`,
            {
                method,
                credentials: "include",
                body
            }).then(res => res.json())
    }
}

export {
    fetchApi
}