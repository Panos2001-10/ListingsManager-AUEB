const base_url = "https://wiki-ads.onrender.com";

async function getAllCategories()
{
    const response = await fetch(base_url + "/categories");
    const categories = response.json();

    return categories;
}

async function getSubCategories(categoryId)
{
    const response = await fetch(base_url + "/categories/" + categoryId + "/subcategories");
    const subCategories = response.json();

    return subCategories;
}

async function getSubcategoryAds(subcategoryID)
{
    const response = await fetch(base_url + "/ads?subcategory=" + subcategoryID);
    const ads = response.json();
    
    return ads;
}