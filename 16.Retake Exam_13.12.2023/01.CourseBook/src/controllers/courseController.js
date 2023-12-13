const router = require("express").Router();
const courseManager = require("../managers/courseManager");
const { getErrorMessage } = require("../utils/errorHelpers");
const { isAuth } = require("../middlewares/authMiddleware");

router.get("/catalog", async (req, res) => {
  const course = await courseManager.getAll().lean();

  res.render("courses/catalog", { course });
});

router.get("/create", isAuth, (req, res) => {
  res.render("courses/create");
});

router.post("/create", isAuth, async (req, res) => {
  //isAuth,
  const courseData = {
    ...req.body,
    owner: req.user._id,
  };

  try {
    await courseManager.create(courseData);
    res.redirect("/courses/catalog");
  } catch (err) {
    res.render("courses/create", { error: getErrorMessage(err) });
  }
});
router.get("/:courseId/details", async (req, res) => {
  const courseId = req.params.courseId;

  const course = await courseManager.getOne(courseId).lean();

  const isOwner = req.user?._id == course.owner._id;
   const isSignUp = course.signUpList?.some( id => id == req.user?._id)
   const owner = course.owner.username;
   const singupBy = course.signUpList.username
  res.render("courses/details", { course, isOwner, isSignUp, owner,singupBy });
});

router.get("/:courseId/edit", isAuth, async (req, res) => {
  const courseId = req.params.courseId;
  const course = await courseManager.getOne(courseId).lean();

  res.render("courses/edit", { course }); //{photo, isOwner}
});

router.post("/:courseId/edit", isAuth, async (req, res) => {
  const courseId = req.params.courseId;
  const courseData = req.body;

  try {
    await courseManager.edit(courseId, courseData);
    res.redirect(`/courses/${courseId}/details`);
  } catch (err) {
    return res.status(400).render(`404`, { error: getErrorMessage(err) });
  }
});

router.get("/:courseId/delete", isAuth, async (req, res) => {
  //isAuth

  const courseId = req.params.courseId;
  await courseManager.delete(courseId);

  res.redirect("/courses/catalog");
});

router.get('/:courseId/signUp', isAuth, async (req, res) => {

    const userId = req.user._id
    const courseId = req.params.courseId;
    try {
        
        await courseManager.signUp(userId, courseId)
    } catch (error) {
        res.render(`courses/details`, { error: `Unabel to update photo`, ...cryptoData })
    }

    res.redirect(`/courses/${courseId}/details`)

});

module.exports = router;
