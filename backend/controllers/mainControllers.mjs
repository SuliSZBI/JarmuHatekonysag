import { getJson } from "serpapi";

export const getMainBackend = async (req, res) => {
  try {
    const response = await fetch(
      "https://serpapi.com/search.json?engine=google_maps&q=Coffee&ll=@40.7455096,-74.0083012,14z"
    );

    const valasz = await getJson({
      engine: "google_maps",
      q: "Coffee",
      ll: "@40.7455096,-74.0083012,14z",
      api_key:
        "8f07e434a940947acb8dcc1c35743253f20b5e0c3736da88742db04bcdc01039",
    });
    console.log(valasz);

    if (response.ok) {
      res.statusCode = 200;
      return res.json({ msg: "Sikeres!" });
    }
  } catch (error) {
    res.statusCode = 404;
    return res.render("404.ejs");
  }
};
