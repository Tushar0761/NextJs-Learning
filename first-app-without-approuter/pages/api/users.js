// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    console.log(req);
    let data = [
        { id: 1, name: "Tushar Panchal" },
        { id: 2, name: "varun Panchal" },
        { id: 3, name: "shinde Panchal" },
        { id: 4, name: "smit Panchal" },
        { id: 5, name: "vasu Panchal" },
        { id: 6, name: "vraj Panchal" },
    ];

    res.status(200).json(JSON.parse(data));
}
